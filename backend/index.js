import "dotenv/config";
import express from "express";
import { connectToDB } from "./db/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

import authRoutes from "./routes/auth/auth.route.js";

app.use("/api/auth", authRoutes);

connectToDB();

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
