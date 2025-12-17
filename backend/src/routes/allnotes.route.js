import express from "express";
import { getAllNotes } from "../controllers/allnotes.controller.js";
import { userAuth } from "../middleware/auth.middleware.js";
const router = express.Router();
router.get("/allnotes", userAuth, getAllNotes);
export default router;
