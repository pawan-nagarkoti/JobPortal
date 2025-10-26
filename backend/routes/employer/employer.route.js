import {
  addEmployer,
  deleteAllEmployer,
  deleteEmployer,
  fetchEmployers,
  fetchSingleEmployer,
  updateEmployer,
} from "../../controllers/employer/employer.controller.js";
import express from "express";
import { upload } from "../../middleware/multer.middlewre.js";
const router = express.Router();

router.get("/fetch", fetchEmployers);
router.get("/single", fetchSingleEmployer);
router.post(
  "/add",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  addEmployer
);
router.put("/update/:id", updateEmployer);
router.delete("/delete/:id", deleteEmployer);
router.delete("/delete-all", deleteAllEmployer);

export default router;
