import { Router } from "express";
import { userContoller } from "../controllers/UserController.js";
import { registrationValidations } from "../validations/registrationValidation.js";

const router = new Router();

router.post(
  "/registration",
  registrationValidations,
  userContoller.registration
);
router.post("/authorization", userContoller.login);
router.post("/logout", userContoller.logout);
router.get("/activate/:link", userContoller.activate);
router.get("/refresh", userContoller.refresh);
router.get("/users", userContoller.getUsers);

export { router };
