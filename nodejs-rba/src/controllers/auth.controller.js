import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";

export const register = asyncHandler(async (req, res) => {
    const { username, password, role } = req.body;

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
        role
    });

    return res.status(400).json({
        status: 400,
        message: "User already exists with this username",
        data: user
    })
})

export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
        return res.status(404).json({
            status: 404,
            message: "User not found"
        })
    }

    const isPassValid = await existingUser.isPasswordCorrect(password);

    if (!isPassValid) {
        return res.status(400).json({
            status: 400,
            message: "Invalid credentials"
        })
    }

    const token = await existingUser.generateAccessToken();

    return res.status(200).json({
        status: 200,
        message: "User logged in successfully",
        data: {
            ...existingUser._doc,
            token
        }
    })
})