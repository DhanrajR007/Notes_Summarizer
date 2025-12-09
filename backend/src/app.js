import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import { errorHandler } from "./utils/error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(errorHandler);

app.use("/api/auth", userRouter);

export default app;
