import express from "express";
import {
  addApplicant,
  deleteApplicant,
  fetchApplicant,
  singleApplicant,
  deleteAllApplicant,
  updateApplicant,
} from "../../controllers/applicant/applicant.controller.js";
import { upload } from "../../middleware/multer.middlewre.js";
import { validateObjectIds } from "../../middleware/validObjectId.middleware.js";
const router = express.Router();

router.post(
  "/add",
  upload.fields([{ name: "profilePicture", maxCount: 1 }]),
  validateObjectIds(["userId"]),
  addApplicant
);

router.get("/fetch", fetchApplicant);
router.get("/single/:id", validateObjectIds(["id"]), singleApplicant);
router.delete("/delete/:id", validateObjectIds(["id"]), deleteApplicant);
router.delete("/delete-all", deleteAllApplicant);
router.put(
  "/update/:id",
  upload.fields([
    {
      name: "profilePicture",
      maxCount: 1,
    },
  ]),
  validateObjectIds(["id", "userId"]),
  updateApplicant
);

export default router;
