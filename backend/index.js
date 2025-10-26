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

import authRoutes from "./routes/auth/auth.route.js";
import employerRoutes from "./routes/employer/employer.route.js";
import { auth } from "./middleware/auth.middleware.js";

app.use("/api/auth", authRoutes);
app.use("/api/employer", auth, employerRoutes);

connectToDB();

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
