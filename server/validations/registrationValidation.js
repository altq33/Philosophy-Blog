import { body } from "express-validator";

export const registrationValidations = [
  body("login").isLength({ min: 3 }).withMessage("minimum 3 symbols"),
  body("password").isLength({ min: 10 }).withMessage("minimum 10 symbols"),
  body("avatarUrl").optional().isURL(),
];
