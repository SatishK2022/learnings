import { createUserService, deleteUserService, getAllUserService, getUserByIdService, updateUserService } from "../models/user.model.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createUser = asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    const newUser = await createUserService(name, email);

    apiResponse(res, 201, "User Created Successfully", newUser)
});

export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await getAllUserService();

    apiResponse(res, 200, "User fetched successfully", users)
});

export const getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await getUserByIdService(id);

    if (!user) {
        return apiResponse(res, 404, "User not found");
    }

    apiResponse(res, 200, "User fetched successfully", user)
});

export const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await updateUserService(id, name, email);

    if (!updatedUser) {
        return apiResponse(res, 404, "User not found");
    }

    apiResponse(res, 200, "User updated successfully", updatedUser)
});

export const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await deleteUserService(id);

    if (!user) {
        return apiResponse(res, 404, "User not found")
    }

    apiResponse(res, 200, "User deleted successfully");
});