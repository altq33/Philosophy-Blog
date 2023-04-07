import { Router } from "express";
import { userContoller } from "../controllers/UserController.js";
import { galleryController } from "../controllers/GalleryController.js";
import { registrationValidations } from "../validations/registrationValidation.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { fileMiddleware } from "../middlewares/fileMiddleware.js";

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
router.get("/users", authMiddleware, userContoller.getUsers);
router.get("/users/:login", userContoller.getUserProfile);
router.patch(
  "/users/:login",
  authMiddleware,
  fileMiddleware.single("avatar"),
  userContoller.updateUserProfile
);

export { router };
