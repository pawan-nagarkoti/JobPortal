import express from "express";

import {
  addBlog,
  deleteAllBlogs,
  deleteBlog,
  fetchBlogs,
  fetchSingleBlog,
  updateBlog,
} from "../../controllers/blog/blog.controller.js";
const router = express.Router();
import { auth } from "../../middleware/auth.middleware.js";
import { upload } from "../../middleware/multer.middlewre.js";
import { validateObjectIds } from "../../middleware/validObjectId.middleware.js";

router.post(
  "/add",
  auth,
  upload.none(),
  validateObjectIds(["applicant", "employer"]),
  addBlog
);
router.put("/update/:id", auth, updateBlog);
router.get("/fetch", fetchBlogs);
router.get("/single", fetchSingleBlog);
router.delete("/delete", auth, deleteBlog);
router.delete("/delete-all", auth, deleteAllBlogs);

export default router;
