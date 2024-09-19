import crypto from "crypto";

const users = [];
export const sendOtp = (req, res) => {
  const { emailOrPhone } = req.body;

  if (!emailOrPhone) {
    return res
      .status(400)
      .json({ message: "Email or phone number is required." });
  }

  const otp = crypto.randomInt(1000, 9999);
  console.log(`Generated OTP for ${emailOrPhone}: ${otp}`);

  users.push({ emailOrPhone, otp });

  return res.status(200).json({ message: "OTP sent successfully.", otp });
};

export const verifyOtp = (req, res) => {
  const { emailOrPhone, enteredOtp } = req.body;

  const user = users.find(
    (u) => u.emailOrPhone === emailOrPhone && u.otp === parseInt(enteredOtp)
  );

  if (user) {
    return res
      .status(200)
      .json({ message: "OTP verified successfully. Login successful." });
  } else {
    return res.status(400).json({ message: "Invalid OTP or user not found." });
  }
};

export const guestLogin = (req, res) => {
  return res.status(200).json({ message: "Guest login successful" });
};
