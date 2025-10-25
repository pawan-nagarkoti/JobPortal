import "dotenv/config";
import express from "express";
import { connectToDB } from "./db/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

import authRoutes from "./routes/auth/auth.route.js";
import employerRoutes from "./routes/employer/employer.route.js";

app.use("/api/auth", authRoutes);
app.use("/api/employer", employerRoutes);

connectToDB();

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
