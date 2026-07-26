import express, { Router } from "express";
import { totalCount } from "../../controllers/other/totalCount.controller.js";

const router = express.Router();

router.get("/count", totalCount);

export default router;
