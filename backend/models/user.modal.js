import mongoose from "mongoose";
import { USER_ROLE } from "../constant";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: USER_ROLE.EMPLOYER,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isActive: String,
    isDeleted: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
