import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB}`);
    console.log("MongoDB connected successfully!");
  } catch (e) {
    console.log(e.message);
    console.log("something is wrong while connection mongoDB");
  }
};
