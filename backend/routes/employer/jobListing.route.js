import express from "express";
import {
  addJob,
  fetchJobs,
  singleJob,
  deleteJob,
  deleteAllJob,
} from "../../controllers/employer/jobListing.controller.js";
const router = express.Router();

router.post("/add", addJob);
router.get("/fetch", fetchJobs);
router.get("/single/:id", singleJob);
router.delete("/delete/:id", deleteJob);
router.delete("/delete-all", deleteAllJob);

export default router;
