import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { userModel } from "./models/User.js";
import bcrypt from "bcrypt";
import checkAuth from "./utils/checkAuth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { router } from "./router/index.js";

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
app.use(cors());
app.use(cookieParser());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Alldone");
});

app.post("/auth/authorization", async (req, res) => {
  try {
    const user = await UserModel.findOne({ login: req.body.login });

    if (!user) {
      return res.status(400).json({
        message: "wrong login or password",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.password
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: "wrong login or password",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secretweakside",
      {
        expiresIn: "10m",
      }
    );

    res.json({
      login: user.login,
      id: user._id,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error to auth",
    });
  }
});

app.get("/auth/me", checkAuth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status("404").json({
        message: "User is not found",
      });
    }
    res.json({
      login: user.login,
      id: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No access",
    });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Server Ok");
});
