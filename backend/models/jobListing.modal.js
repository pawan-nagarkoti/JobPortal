import mongoose from "mongoose";
import {
  EDUCATION,
  JOB_LEVEL,
  JOB_TYPE,
  SALARY_CURRENCY,
  SALARY_PERIOD,
  WORK_TYPE,
} from "../constant.js";

const jobListingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true, trim: true },
    tags: [String],
    salary: {
      minSalary: String,
      maxSalary: String,
      period: {
        type: String,
        enum: Object.values(SALARY_PERIOD),
      },
      currency: {
        type: String,
        enum: Object.values(SALARY_CURRENCY),
      },
    },
    education: {
      type: String,
      enum: Object.values(EDUCATION),
    },
    experience: String,
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
    },
    vacancies: Number,
    expirationDate: Date,
    workType: {
      type: String,
      enum: Object.values(WORK_TYPE),
    },
    jobLevel: {
      type: String,
      enum: Object.values(JOB_LEVEL),
    },
    location: {
      country: String,
      city: String,
      isRemoteWorldwidePosition: { type: Boolean, default: false },
    },
    jobBenefits: [String],
    description: String,
    applyJob: String,
    isExpired: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
      required: true,
    },
    expiresAt: Date,
  },
  { timestamps: true }
);

export const JobListing = mongoose.model("JobListing", jobListingSchema);
