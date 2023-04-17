import { ApiError } from "../exceptions/ApiError.js";
import { likeModel } from "../models/Like.js";

class LikeService {
  async create(userId, postId) {
    const doc = new likeModel({
      user: userId,
      post: postId,
    });

    await doc.save();
  }
  async delete(userId, postId) {
    await likeModel.deleteOne({ user: userId, post: postId });
  }

  async checkLikeStatus(userId, postId) {
    const like = await likeModel.findOne({ user: userId, post: postId });
    const count = await likeModel.count({ post: postId });
    return { isLiked: like ? true : false, count };
  }
}

export const likeService = new LikeService();
