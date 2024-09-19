import express from "express";
import {
  sendOtp,
  verifyOtp,
  guestLogin,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/send-otp", sendOtp);

router.post("/verify-otp", verifyOtp);

router.post("/guest-login", guestLogin);

export default router;
