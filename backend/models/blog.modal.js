import mongoose from "mongoose";
import { Applicant } from "./applicant.modal.js";
import { Employer } from "./employer.modal.js";
import { BLOG_CATEGORIES, BLOG_TAGS } from "../constant.js";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    shortDescription: String,
    longDescription: String,
    date: Date,
    comments: Number,
    categories: {
      type: [String],
      enum: Object.values(BLOG_CATEGORIES),
    },
    tags: {
      type: [String],
      enum: Object.values(BLOG_TAGS),
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Applicant,
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Employer,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
