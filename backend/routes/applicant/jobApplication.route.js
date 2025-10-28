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
router.put("/update/:id", validateObjectIds(["id"]), updateJob);
router.get("/fetch", fetchAllJobs);
router.get("/single/:id", validateObjectIds(["id"]), fetchSingleJob);
router.delete("/delete/:id", validateObjectIds(["id"]), deleteJob);
router.delete("/delete-all", deleteAllJobs);

export default router;
