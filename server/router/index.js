import { Router } from "express";
import { userContoller } from "../controllers/UserController.js";
import { galleryController } from "../controllers/GalleryController.js";
import { registrationValidations } from "../validations/registrationValidation.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  avatarFileMiddleware,
  postCoverFileMiddleware,
} from "../middlewares/fileMiddleware.js";
import { postContoller } from "../controllers/PostController.js";
import { likeController } from "../controllers/LikeController.js";

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
router.get("/gallery", galleryController.getPictures);
router.get("/users", authMiddleware, userContoller.getUsers);
router.get("/users/:login", userContoller.getUserProfile);
router.patch(
  "/users/:login",
  authMiddleware,
  avatarFileMiddleware.single("avatar"),
  userContoller.updateUserProfile
);
router.patch(
  "/users/:login/password",
  authMiddleware,
  userContoller.updateUserPassword
);
router.post(
  "/posts",
  authMiddleware,
  postCoverFileMiddleware.single("cover"),
  postContoller.createPost
);
router.patch(
  "/posts/:id",
  authMiddleware,
  postCoverFileMiddleware.single("cover"),
  postContoller.updatePost
);
router.get("/posts", postContoller.getAllPosts);
router.get("/posts/:id", postContoller.getPostById);
router.delete("/posts/:id", authMiddleware, postContoller.deletePost);
router.post("/posts/:id/like", authMiddleware, likeController.createLike);
router.delete(
  "/posts/:id/like/:user",
  authMiddleware,
  likeController.deleteLike
);
router.post("/posts/:id/like/check", likeController.checkLikeStatus);

export { router };
