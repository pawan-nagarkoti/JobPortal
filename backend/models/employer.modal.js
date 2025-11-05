import mongoose from "mongoose";

const employerSchema = new mongoose.Schema(
  {
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
    teamSize: Number,
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
  { timestamps: true }
);

export const Employer = mongoose.model("Employer", employerSchema);
