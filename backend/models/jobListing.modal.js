import mongoose from "mongoose";
import { EDUCATION, JOB_TYPE, SALARY_CURRENCY, WORK_TYPE } from "../constant";
import { Employer } from "./employer.modal";

const jobListingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true, trim: true },
    tags: [String],
    salary: {
      minSalary: String,
      maxSalary: String,
      period: {
        type: String,
        enum: SALARY_PERIOD.MONTHLY,
      },
      currency: {
        type: String,
        enum: SALARY_CURRENCY.USD,
      },
    },
    education: {
      type: String,
      enum: EDUCATION.NONE,
    },
    experience: String,
    jobType: {
      type: String,
      enum: JOB_TYPE.REMOTE,
    },
    vacancies: Number,
    expirationDate: Date,
    workType: {
      type: String,
      enum: WORK_TYPE.FULL_TIME,
    },
    jobLevel: {
      type: String,
      enum: JOB_LEVEL.INTERNSHIP,
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
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Employer,
    },
    expiresAt: Date,
  },
  { timestamps: true }
);

export const JobListing = mongoose.model("JobListing", jobListingSchema);
