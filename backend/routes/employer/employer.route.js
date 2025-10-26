import {
  addEmployer,
  deleteAllEmployer,
  deleteEmployer,
  fetchEmployers,
  fetchSingleEmployer,
  updateEmployer,
} from "../../controllers/employer/employer.controller.js";
import express from "express";
import { auth } from "../../middleware/auth.middleware.js";
const router = express.Router();

router.get("/fetch", auth, fetchEmployers);
router.get("/single-employer", fetchSingleEmployer);
router.post("/add-employer", addEmployer);
router.put("/update-employer/:id", updateEmployer);
router.delete("/delete-employer/:id", deleteEmployer);
router.delete("/delete-all-employer", deleteAllEmployer);

export default router;
