import express from "express";
import {
  addResume,
  deleteAllResume,
  deleteResume,
  fetchResume,
  fetchSingleResume,
  updateResume,
} from "../../controllers/applicant/resume.controller.js";

const router = express.Router();

router.post("/add", addResume);
router.put("/update", updateResume);
router.get("/fetch", fetchResume);
router.get("/single/:id", fetchSingleResume);
router.delete("/delete", deleteResume);
router.delete("/delete-all", deleteAllResume);

export default router;
