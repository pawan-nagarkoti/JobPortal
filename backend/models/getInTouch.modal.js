import mongoose from "mongoose";

const getInTouchSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

export const GetInTouch = mongoose.model("GetInTouch", getInTouchSchema);
