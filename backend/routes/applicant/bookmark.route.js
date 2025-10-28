import express from "express";
import {
  addBookmark,
  deleteAllBookmark,
  deleteBookmark,
  fetchBookmark,
  fetchSingleBookmark,
} from "../../controllers/applicant/bookmarkJob.controller.js";
import { validateObjectIds } from "../../middleware/validObjectId.middleware.js";
const router = express.Router();

router.use("/add", validateObjectIds(["jobId", "applicantId"]), addBookmark);
router.use("/fetch", fetchBookmark);
router.use("/single/:id", validateObjectIds(["id"]), fetchSingleBookmark);
router.use("/delete/:id", validateObjectIds(["id"]), deleteBookmark);
router.use("/delete-all", deleteAllBookmark);

export default router;
