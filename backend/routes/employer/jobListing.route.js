import express from "express";
import { addJob } from "../../controllers/employer/jobListing.controller.js";
const router = express.Router();

router.post("/add", addJob);

export default router;
