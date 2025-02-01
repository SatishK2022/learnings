import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized - No token provided"
        })
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken._id);

        req.user = user

        next();
    } catch (error) {
        console.error("Error in auth middleware: ", error);
        return res.status(500).json({
            status: 500,
            message: error.message || "Error verifying token"
        })
    }
}