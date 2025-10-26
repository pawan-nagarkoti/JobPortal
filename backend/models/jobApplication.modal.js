import mongoose from "mongoose";
import { JobListing } from "./jobListing";
import { Applicant } from "./applicant.modal";
import { APPLICATION_STATUS } from "../constant";
import { Resume } from "./resume.modal";

const jobApplicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: JobListing,
      unique: true,
    },
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Applicant,
      unique: true,
    },
    coverLetter: String,
    status: {
      type: String,
      enum: Object.values(APPLICATION_STATUS),
    },
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Resume,
      unique: true,
    },
    bookmarked: {
      type: Boolean,
      default: false,
    },
    appliedAt: timestamps,
    statusUpdatedAt: timestamps,
    notes: String,
  },
  { timestamps: true }
);

export const JobApplication = mongoose.model(
  "JobApplication",
  jobApplicationSchema
);
