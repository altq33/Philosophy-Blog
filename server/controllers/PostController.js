import { ApiError } from "../exceptions/ApiError.js";
import { postModel } from "../models/Post.js";
import { postService } from "../services/PostService.js";
import { validationResult } from "express-validator";

class PostContoller {
  async createPost(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }

      const post = await postService.createPost({
        title: req.body.title,
        imgUrl: req.file ? `uploads/posts/covers/${req.trueFileName}` : "",
        description: req.body.description,
        text: req.body.text,
        tags: req.body.tags,
        user: req.body.user,
      });

      return res.json({ message: "Successful", post });
    } catch (error) {
      console.log(error);
      return next(ApiError.BadRequest("Error while creating post!"));
    }
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await postService.getAllPosts();
      if (!posts) {
        return next(ApiError.BadRequest("Error get post"));
      }
      res.json(posts);
    } catch (error) {
      return next(ApiError.BadRequest("Error while getting posts!"));
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postService.getPostById(req.params.id);
      if (!post) {
        return next(ApiError.NotFound("Not found!"));
      }
      res.json(post);
    } catch (error) {
      console.log(error);
      return next(ApiError.NotFound("Not found!"));
    }
  }

  async deletePost(req, res, next) {
    try {
      const deletedPost = await postService.deletePost(req.params.id);
      if (!deletedPost) {
        return next(ApiError.NotFound("Not found to delete!"));
      }
      return res.json({ message: "Successful deleted" });
    } catch (error) {
      console.log(error);
      return next(ApiError.NotFound("Not found to delete!"));
    }
  }

  async updatePost(req, res, next) {
    try {
      const updatedPost = await postService.updatePost(req.params.id, {
        title: req.body.title,
        text: req.body.text,
        description: req.body.description,
        tags: req.body.tags,
        imgUrl: req.file ? `uploads/posts/covers/${req.trueFileName}` : "",
        user: req.body.user,
      });
      if (!updatedPost) {
        return next(ApiError.NotFound("Not found to update!"));
      }
      return res.json({ message: "Successful updated" });
    } catch (error) {
      return next(ApiError.NotFound("Not found to update!"));
    }
  }
}

export const postContoller = new PostContoller();
