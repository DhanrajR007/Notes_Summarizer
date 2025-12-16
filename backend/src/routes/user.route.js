import express from "express";
import { getMe, login, register } from "../controllers/auth.controller.js";
import multer from "multer";
import { userAuth } from "../middleware/auth.middleware.js";
const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/register", upload.single("profileImage"), register);
router.post("/login", login);
router.get("/me", userAuth, getMe);

export default router;
