import "dotenv/config";
import express from "express";
import { connectToDB } from "./db/index.js";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api", async (req, res) => {
  return res.status(200).json({
    message: "api is working",
  });
});

connectToDB();

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
