import "dotenv/config";
import express from "express";
import { connectToDB } from "./db/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

// middleware
app.use(cors());
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

app.use("/api/auth", authRoutes);
app.use("/api/employer", auth, employerRoutes);
app.use("/api/jobList", auth, jobListingRoutes);
app.use("/api/applicant", auth, applicantRoutes);
app.use("/api/resume", auth, resumeRoutes);
app.use("/api/bookmark-job", auth, bookmarkJobs);

connectToDB();

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
