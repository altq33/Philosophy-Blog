import { likeService } from "../services/LikeService.js";
import { ApiError } from "../exceptions/ApiError.js";

class LikeController {
  async createLike(req, res, next) {
    try {
      await likeService.create(req.body.user, req.params.id);
      res.json({ message: "Successful" });
    } catch (error) {
      console.log(error);
      return next(ApiError.BadRequest("Error"));
    }
  }

  async deleteLike(req, res, next) {
    try {
      await likeService.delete(req.params.user, req.params.id);
      res.json({ message: "Successful" });
    } catch (error) {
      console.log(error);
      return next(ApiError.BadRequest("Error"));
    }
  }

  async checkLikeStatus(req, res, next) {
    try {
      const status = await likeService.checkLikeStatus(
        req.body.user,
        req.params.id
      );
      res.json({ status });
    } catch (error) {
      console.log(error);
      return next(ApiError.BadRequest("Error"));
    }
  }
}

export const likeController = new LikeController();
