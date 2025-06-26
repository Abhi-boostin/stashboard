import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  changePassword,
  verifyOTP,      // <-- Add this import
  resendOTP       // <-- Add this import (optional)
} from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Registration and login
router.post("/register", registerUser);
router.post("/login", loginUser);

// OTP verification routes
router.post("/verify-otp", verifyOTP);      // <-- Add this line
router.post("/resend-otp", resendOTP);      // <-- Add this line (optional)

// Authenticated user routes
router.get("/profile", authenticateToken, getProfile);
router.put("/profile/password", authenticateToken, changePassword);

export default router;
