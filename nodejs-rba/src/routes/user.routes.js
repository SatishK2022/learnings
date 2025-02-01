import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js"
import authorizeRoles from "../middlewares/authorizeRoles.middleware.js";
const router = Router();

// Only admin can access this route
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({
        status: 200,
        message: "Welcome Admin"
    })
})

// Both admin and manager can access this route
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.json({
        status: 200,
        message: "Welcome Manager"
    })
})

// All can access this route
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({
        status: 200,
        message: "Welcome User"
    })
})


export default router;