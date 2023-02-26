import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { registrationValidations } from "./validations/registrationValidation.js";
import { validationResult } from "express-validator";
import { UserModel } from "./models/User.js";
import bcrypt from "bcrypt";
import checkAuth from "./utils/checkAuth.js";
import cors from "cors";

mongoose.set("strictQuery", false);
const dbURI = "mongodb://127.0.0.1:27017/phblog";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected OK");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Alldone");
});

app.post("/auth/registration", registrationValidations, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const salt = await bcrypt.genSalt(3);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    const doc = new UserModel({
      login: req.body.login,
      password: passwordHash,
    });

    const user = await doc.save();

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
      message: "error to reg",
    });
  }
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

app.listen(4444, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Server Ok");
});
