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
import { validateObjectIds } from "../../middleware/validObjectId.middleware.js";
const router = express.Router();
import { auth } from "../../middleware/auth.middleware.js";

router.get("/fetch", fetchEmployers);
router.get("/single/:id", auth, validateObjectIds(["id"]), fetchSingleEmployer);
router.post(
  "/add",
  auth,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  addEmployer,
);
router.put(
  "/update/:id",
  auth,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  validateObjectIds(["id"]),
  updateEmployer,
);
router.delete("/delete/:id", auth, validateObjectIds(["id"]), deleteEmployer);
router.delete("/delete-all", auth, deleteAllEmployer);

export default router;
