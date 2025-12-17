import express from "express";
import { userAuth } from "../middleware/auth.middleware.js";
import { getAllNotes } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/allnotes", userAuth, getAllNotes);
export default router;
