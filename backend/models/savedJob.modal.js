import mongoose from "mongoose";
import { JobListing } from "./jobListing.modal.js";
import { Applicant } from "./applicant.modal.js";
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
