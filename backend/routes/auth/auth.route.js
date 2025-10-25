import express from "express";
import {
  deleteAll,
  emailVerified,
  forgotPassword,
  logout,
  refreshToken,
  resetPassword,
  signIn,
  signUp,
} from "../../controllers/auth/auth.controller.js";
const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.post("/email-verify", emailVerified);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/delete-all", deleteAll);

export default router;
