import express from "express";
import { summary } from "../controllers/ai.controller.js";
import { userAuth } from "../middleware/auth.middleware.js";
import multer from "multer";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/summary", userAuth, upload.single("file"), summary);
// router.post("/translate");
// router.post("/mcq");
// router.post("/question");

export default router;
