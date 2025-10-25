import express from "express";
import {
  logout,
  signIn,
  signUp,
} from "../../controllers/auth/auth.controller.js";
const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/logout", logout);

export default router;
