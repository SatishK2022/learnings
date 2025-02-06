import { Router } from "express";
import passport from "passport";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authStatus, login, logout, register, reset2FA, setup2FA, verify2FA } from "../controllers/auth.controller.js";

const router = Router();

// Registration Route
router.post("/register", register);

// Login Route
router.post("/login", passport.authenticate("local"), login);

// Auth Status Route
router.get("/status", authStatus);

// Logout Route
router.post("/logout", logout);



// 2FA Setup
router.post("/2fa/setup", isAuthenticated, setup2FA);

// 2FA Verify
router.post("/2fa/verify", isAuthenticated, verify2FA)

// 2FA Reset
router.post("/2fa/reset", isAuthenticated, reset2FA)


export default router;