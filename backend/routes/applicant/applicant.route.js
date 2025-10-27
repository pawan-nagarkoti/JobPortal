import express from "express";
import {
  addApplicant,
  deleteApplicant,
  fetchApplicant,
  singleApplicant,
  deleteAllApplicant,
} from "../../controllers/applicant/applicant.controller.js";
import { upload } from "../../middleware/multer.middlewre.js";
const router = express.Router();

router.post(
  "/add",
  upload.fields([{ name: "profilePicture", maxCount: 1 }]),
  addApplicant
);

router.get("/fetch", fetchApplicant);
router.get("/single/:id", singleApplicant);
router.delete("/delete/:id", deleteApplicant);
router.delete("/delete-all", deleteAllApplicant);

export default router;
