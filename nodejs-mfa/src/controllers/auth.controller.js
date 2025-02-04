import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";

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

})

export const authStatus = asyncHandler(async (req, res) => {

})

export const setup2FA = asyncHandler(async (req, res) => {

})

export const verify2FA = asyncHandler(async (req, res) => {

})

export const reset2FA = asyncHandler(async (req, res) => {

})