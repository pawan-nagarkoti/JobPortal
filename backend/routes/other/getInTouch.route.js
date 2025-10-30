import express from "express";
import { addContact } from "../../controllers/other/getInTouch.controller.js";

const router = express.Router();

router.post("/add", addContact);

export default router;
