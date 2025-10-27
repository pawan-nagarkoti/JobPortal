import express from "express";
import {
  addResume,
  deleteAllResume,
  deleteResume,
  fetchResume,
  fetchSingleResume,
  updateResume,
} from "../../controllers/applicant/resume.controller.js";
import { upload } from "../../middleware/multer.middlewre.js";

const router = express.Router();

router.post(
  "/add",
  upload.fields([
    {
      name: "cv",
      maxCount: 1,
    },
  ]),
  addResume
);
router.put(
  "/update/:id",
  upload.fields([
    {
      name: "cv",
      maxCount: 1,
    },
  ]),
  updateResume
);
router.get("/fetch", fetchResume);
router.get("/single/:id", fetchSingleResume);
router.delete("/delete/:id", deleteResume);
router.delete("/delete-all", deleteAllResume);

export default router;
