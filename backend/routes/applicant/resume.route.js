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
import { validateObjectIds } from "../../middleware/validObjectId.middleware.js";

const router = express.Router();

router.post(
  "/add",
  upload.fields([
    {
      name: "cv",
      maxCount: 1,
    },
  ]),
  validateObjectIds(["applicantId"]),
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
  validateObjectIds(["id"]),
  updateResume
);
router.get("/fetch", fetchResume);
router.get("/single/:id", validateObjectIds(["id"]), fetchSingleResume);
router.delete("/delete/:id", validateObjectIds(["id"]), deleteResume);
router.delete("/delete-all", deleteAllResume);

export default router;
