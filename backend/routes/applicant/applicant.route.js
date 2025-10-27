import express from "express";
import { addApplicant } from "../../controllers/applicant/applicant.controller.js";
import { upload } from "../../middleware/multer.middlewre.js";
const router = express.Router();

router.post(
  "/add",
  upload.fields([{ name: "profilePicture", maxCount: 1 }]),
  addApplicant
);

export default router;
