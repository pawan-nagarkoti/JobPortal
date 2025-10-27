import express from "express";
import {
  addBookmark,
  deleteAllBookmark,
  deleteBookmark,
  fetchBookmark,
  fetchSingleBookmark,
} from "../../controllers/applicant/bookmarkJob.controller.js";
const router = express.Router();

router.use("/add", addBookmark);
router.use("/fetch", fetchBookmark);
router.use("/single/:id", fetchSingleBookmark);
router.use("/delete/:id", deleteBookmark);
router.use("/delete-all", deleteAllBookmark);

export default router;
