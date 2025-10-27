import mongoose from "mongoose";
import { EDUCATION, GENDER, MARITAL_STATUS } from "../constant.js";
import { User } from "./user.modal.js";

const applicantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
      index: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    biography: String,
    dob: Date,
    nationality: String,
    gender: {
      type: String,
      enum: Object.values(GENDER),
    },
    maritalStatus: {
      type: String,
      enum: Object.values(MARITAL_STATUS),
    },
    experience: {
      type: String,
    },
    education: {
      type: String,
      enum: Object.values(EDUCATION),
    },
    websiteUrl: String,
    location: String,
    isDeleted: String,
    title: String,

    socialLinks: [
      {
        name: String,
        url: String,
      },
    ],
    phone: {
      countryCode: String,
      number: String,
    },
    alertJob: {
      role: String,
      location: String,
    },
    profilePrivacy: {
      type: Boolean,
      default: false,
    },
    resumePrivacy: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Applicant = mongoose.model("Applicant", applicantSchema);
