import { Router } from "express";
import { userContoller } from "../controllers/UserController.js";
import { registrationValidations } from "../validations/registrationValidation.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = new Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/users/avatars");
  },
  filename: (req, file, callback) => {
    callback(null, `${req.user.login}-avatar.${file.mimetype.split("/")[1]}`);
  },
});

const upload = multer({ storage });

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
router.get("/users/:login", userContoller.getUserProfile)
router.post(
  "/users/upload/avatar",
  authMiddleware,
  upload.single("image"),
  userContoller.uploadAvatar
);
export { router };
