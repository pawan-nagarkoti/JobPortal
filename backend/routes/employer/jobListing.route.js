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
import { auth } from "../../middleware/auth.middleware.js";
const router = express.Router();

router.post("/add", auth, validateObjectIds(["employerId"]), addJob);
router.get("/fetch", fetchJobs);
router.get("/single/:id", auth, validateObjectIds(["id"]), singleJob);
router.delete("/delete/:id", auth, validateObjectIds(["id"]), deleteJob);
router.delete("/delete-all", auth, deleteAllJob);
router.put(
  "/update/:id",
  auth,
  validateObjectIds(["id", "employerId"]),
  updateJob,
);

export default router;
