import { body } from "express-validator";

export const postValidations = [
  body("title")
    .isLength({ min: 3, max: 20 })
    .withMessage("minimum 3 symbols, maximum 20 symbols"),
  body("description")
    .isLength({ min: 10, max: 150 })
    .withMessage("minimum 10 symbols, maximum 150 symbols"),
  body("imgUrl").optional().isURL(),
  body("text")
    .isLength({ min: 100, max: 1000 })
    .withMessage("minimum 100 symbols, maximum 1000 symbols"),
];
