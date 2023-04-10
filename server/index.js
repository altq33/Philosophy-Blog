import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { router } from "./router/index.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import nocache from "nocache";

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
app.use(nocache());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads/users/avatars", express.static("uploads/users/avatars"));
app.use("/uploads/pictures", express.static("uploads/pictures"));
app.use("/uploads/posts/covers", express.static("uploads/posts/covers"));
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
app.use("/api", router);
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Alldone");
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Server Ok");
});
