import mongoose from "mongoose";
import { Applicant } from "./applicant.modal";

const resumeSchema = new mongoose.Schema(
  {
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Applicant,
      unique: true,
    },
    title: String,
    cv: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Resume = mongoose.model("Resume", resumeSchema);
