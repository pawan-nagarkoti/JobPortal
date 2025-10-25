import {
  addEmployer,
  deleteAllEmployer,
  deleteEmployer,
  fetchEmployers,
  fetchSingleEmployer,
  updateEmployer,
} from "../../controllers/employer/employer.controller.js";
import express from "express";
const router = express.Router();

router.get("/fetch", fetchEmployers);
router.get("/single-employer", fetchSingleEmployer);
router.post("/add-employer", addEmployer);
router.put("/update-employer/:id", updateEmployer);
router.delete("/delete-employer/:id", deleteEmployer);
router.delete("/delete-all-employer", deleteAllEmployer);

export default router;
