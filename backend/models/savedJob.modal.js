import mongoose from "mongoose";
import { JobListing } from "./jobListing";
import { Applicant } from "./applicant.modal";
const savedJobSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: JobListing,
    },
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Applicant,
    },
    notes: String,
  },
  { timestamps: true }
);

export const SavedJob = mongoose.model("SavedJob", savedJobSchema);
