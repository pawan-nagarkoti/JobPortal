import express from "express";
import {
  addJob,
  fetchJobs,
  singleJob,
  deleteJob,
  deleteAllJob,
  updateJob,
} from "../../controllers/employer/jobListing.controller.js";
import { validateObjectIds } from "../../middleware/validObjectId.middleware.js";
const router = express.Router();

router.post("/add", validateObjectIds(["employerId"]), addJob);
router.get("/fetch", fetchJobs);
router.get("/single/:id", validateObjectIds(["id"]), singleJob);
router.delete("/delete/:id", validateObjectIds(["id"]), deleteJob);
router.delete("/delete-all", deleteAllJob);
router.put("/update/:id", validateObjectIds(["id", "employerId"]), updateJob);

export default router;
