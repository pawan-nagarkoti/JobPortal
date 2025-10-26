import express from "express";
import {
  addJob,
  fetchJobs,
} from "../../controllers/employer/jobListing.controller.js";
const router = express.Router();

router.post("/add", addJob);
router.get("/fetch/:id", fetchJobs);

export default router;
