import "dotenv/config";
import express from "express";
import { connectToDB } from "./db/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

// middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN, // don't add * here because we are using cookies
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse form data
app.use(express.json());

const PORT = process.env.PORT || 5000;

import { auth } from "./middleware/auth.middleware.js"; // middleware
import authRoutes from "./routes/auth/auth.route.js";
import employerRoutes from "./routes/employer/employer.route.js";
import jobListingRoutes from "./routes/employer/jobListing.route.js";
import applicantRoutes from "./routes/applicant/applicant.route.js";
import resumeRoutes from "./routes/applicant/resume.route.js";
import bookmarkJobs from "./routes/applicant/bookmark.route.js";
import jobApplicationsRoute from "./routes/applicant/jobApplication.route.js";
import blogRoutes from "./routes/blog/blog.route.js";
import getInTouch from "./routes/other/getInTouch.route.js";
import globalSearchRoute from "./routes/other/globalSearch.route.js";
import mongoose from "mongoose";

app.use("/api/auth", authRoutes);
app.use("/api/employer", employerRoutes);
app.use("/api/jobList", jobListingRoutes);

app.use("/api/applicant", applicantRoutes);
app.use("/api/resume", auth, resumeRoutes);
app.use("/api/bookmark-job", bookmarkJobs);
app.use("/api/job-application", auth, jobApplicationsRoute);
app.use("/api/blog", blogRoutes);
app.use("/api/contact", getInTouch);
app.use("/api/global", globalSearchRoute);

connectToDB();

app.delete("/api/delete-all", async (req, res) => {
  try {
    const db = mongoose.connection.db;

    const collections = await db.listCollections().toArray();

    const result = [];

    for (const collection of collections) {
      if (!collection.name.startsWith("system.")) {
        const deleteResult = await db.collection(collection.name).deleteMany({});

        result.push({
          collection: collection.name,
          deletedCount: deleteResult.deletedCount,
        });
      }
    }

    res.status(200).json({
      success: true,
      message: "All collection data deleted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// app.listen(PORT, () => {
//   console.log(`server is now running on port ${PORT}`);
// });

export default app;
