import mongoose from "mongoose";
import { User } from "./user.modal.js";

const employerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    logo: String,
    banner: String,
    description: String,
    organization: String,
    industry: String,
    teamSize: String,
    establishmentYear: Date,
    url: String,
    companyVision: String,

    socialLinks: [
      {
        name: String,
        url: String,
      },
    ],
    contact: {
      location: {
        country: String,
        city: String,
      },
      phone: {
        countryCode: String,
        number: String,
      },
      email: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

export const Employer = mongoose.model("Employer", employerSchema);
