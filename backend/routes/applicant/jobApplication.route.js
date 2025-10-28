import express from "express";
import {
  addJob,
  deleteAllJobs,
  deleteJob,
  fetchAllJobs,
  fetchSingleJob,
  updateJob,
} from "../../controllers/applicant/jobApplication.controller.js";
import { validateObjectIds } from "../../middleware/validObjectId.middleware.js";
import { upload } from "../../middleware/multer.middlewre.js";
const router = express.Router();

router.post(
  "/add",
  upload.none(),
  validateObjectIds(["jobId", "applicantId", "resumeId"]),
  addJob
);
router.post("/update/:id", updateJob);
router.post("/fetch", fetchAllJobs);
router.post("/single/:id", fetchSingleJob);
router.post("/delete/:id", deleteJob);
router.post("/delete-all", deleteAllJobs);

export default router;
