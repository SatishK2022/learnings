import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import speakeasy from "speakeasy";
import qrcode from "qrcode";
import jwt from "jsonwebtoken";

export const register = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(400).json({
            status: 400,
            message: "User already exists with this username"
        })
    }

    const user = await User.create({
        username,
        password,
        isMfaActive: false,
    })

    return res.status(201).json({
        status: 201,
        message: "User Registered Successfully"
    })
})

export const login = asyncHandler(async (req, res) => {
    console.log("The authenticated user is: ", req.user);

    return res.status(200).json({
        status: 200,
        message: "User LoggedIn Successfully",
        data: {
            username: req.user.username,
            isMfaActive: req.user.isMfaActive
        }
    })
})

export const logout = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized User"
        })
    }

    req.logout((err) => {
        if (err) {
            return res.status(400).json({
                status: 400,
                message: err.message || "Error logging out user"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "User Logged Out Successfully"
        })
    })
})

export const authStatus = asyncHandler(async (req, res) => {
    if (req.user) {
        return res.status(200).json({
            status: 200,
            message: "User LoggedIn Successfully",
            data: {
                username: req.user.username,
                isMfaActive: req.user.isMfaActive
            }
        })
    } else {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized User"
        })
    }
})

export const setup2FA = asyncHandler(async (req, res) => {
    const user = req.user;

    const secret = speakeasy.generateSecret();

    user.twoFactorSecret = secret.base32;
    user.isMfaActive = true;

    await user.save();

    const url = speakeasy.otpauthURL({
        secret: secret.base32,
        label: `${user.username}`,
        issuer: "Satish Kumar",
        encoding: "base32"
    });

    const qrImageUrl = await qrcode.toDataURL(url);

    return res.status(200).json({
        status: 200,
        message: "2FA Setup Successfully",
        data: {
            secret: secret.base32,
            qrImageUrl
        }
    })
})

export const verify2FA = asyncHandler(async (req, res) => {
    const { token } = req.body;

    const user = req.user;

    const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: "base32",
        token
    });

    if (verified) {
        const jwtToken = jwt.sign(
            { username: user.username },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY
            }
        );

        return res.status(200).json({
            status: 200,
            message: "2FA Verified Successfully",
            data: {
                token: jwtToken
            }
        })
    }

    return res.status(400).json({
        status: 400,
        message: "2FA Verification Failed"
    })
})

export const reset2FA = asyncHandler(async (req, res) => {
    const user = req.user;

    user.isMfaActive = false;
    user.twoFactorSecret = null;

    await user.save();

    return res.status(200).json({
        status: 200,
        message: "2FA Reset Successfully"
    })
})