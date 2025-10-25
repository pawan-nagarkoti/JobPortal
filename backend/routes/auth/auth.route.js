import express from "express";
import {
  emailVerified,
  logout,
  refreshToken,
  signIn,
  signUp,
} from "../../controllers/auth/auth.controller.js";
const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.post("/email-verify", emailVerified);

export default router;
