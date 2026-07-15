// import mongoose from "mongoose";

// export const connectToDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB}`);
//     console.log("MongoDB connected successfully!");
//   } catch (e) {
//     console.log(e.message);
//     console.log("something is wrong while connection mongoDB");
//   }
// };

// db/index.js
import mongoose from "mongoose";

export const connectToDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB}`, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 10000,
  });
  console.log("MongoDB connected successfully!");
  return mongoose.connection;
};
