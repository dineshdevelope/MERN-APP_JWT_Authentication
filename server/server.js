import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import userRouter from "./routes/user.route.js";
import { errorHandler, notFound } from "./middleWare/errorHandler.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", userRouter);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
