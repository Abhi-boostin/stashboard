import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import mongoose from "mongoose";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/userController.js";
import { changePassword } from "../controllers/userController.js";

const router = express.Router();

// Registration route
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticateToken, getProfile);
router.put("/profile/password", authenticateToken, changePassword);

export default router;