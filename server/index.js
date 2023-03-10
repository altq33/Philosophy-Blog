import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { router } from "./router/index.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT;

mongoose.set("strictQuery", false);
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected OK");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use("/api", router);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Alldone");
});

app.listen(PORT, "192.168.1.64", (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Server Ok");
});
