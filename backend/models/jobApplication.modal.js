import mongoose from "mongoose";
import { JobListing } from "./jobListing.modal.js";
import { Applicant } from "./applicant.modal.js";
import { APPLICATION_STATUS } from "../constant.js";
import { Resume } from "./resume.modal.js";

const jobApplicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: JobListing,
    },
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Applicant,
    },
    coverLetter: String,
    status: {
      type: String,
      enum: Object.values(APPLICATION_STATUS),
    },
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Resume,
    },
    bookmarked: {
      type: Boolean,
      default: false,
    },
    appliedAt: Date,
    statusUpdatedAt: Date,
    notes: String,
  },
  { timestamps: true }
);

export const JobApplication = mongoose.model(
  "JobApplication",
  jobApplicationSchema
);
