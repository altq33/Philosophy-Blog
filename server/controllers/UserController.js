import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/User.js";
import { validationResult } from "express-validator";
import { userService } from "../services/UserService.js";

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
      }
      const user = await userService.registration(
        req.body.email,
        req.body.login,
        req.body.password
      );
      res.cookie("refreshToken", user.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error to reg",
      });
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {}
  }

  async logout(req, res, next) {
    try {
    } catch (error) {}
  }

  async activate(req, res, next) {
    try {
    } catch (error) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json([1, 2, 3]);
    } catch (error) {}
  }
}

export const userContoller = new UserController();
