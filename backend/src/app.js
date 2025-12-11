import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import aiRouter from "./routes/ai.route.js";
import { errorHandler } from "./utils/error.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(errorHandler);

app.use("/api/auth", userRouter);
app.use("/api/ai", aiRouter);

export default app;
