import { ApiError } from "../exceptions/ApiError.js";
import { postModel } from "../models/Post.js";

class PostService {
  async createPost(post) {
    const doc = new postModel({
      title: post.title,
      imgUrl: post.imgUrl,
      description: post.description,
      text: post.text,
      tags: post.tags,
      viewsCount: 0,
      user: post.user,
    });

    const newPost = await doc.save();

    return newPost;
  }

  async getAllPosts() {
    const posts = await postModel
      .find()
      .populate("user", {
        password: 0,
        bio: 0,
        activated: 0,
        activationLink: 0,
        role: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      })
      .exec();
    return posts;
  }

  async getPostById(id) {
    const post = await postModel
      .findOneAndUpdate(
        { _id: id },
        {
          $inc: { viewsCount: 1 },
        
        },
        {
          returnDocument: "before",
        }
      )
      .populate("user", {
        password: 0,
        bio: 0,
        activated: 0,
        activationLink: 0,
        email: 0,
        _id: 0,
        role: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        posts: 0,
      })
      .exec();
    if (!post) {
      throw ApiError.NotFound("Post not found");
    }
    return post;
  }

  async deletePost(id) {
    const deletedPost = await postModel.findOneAndDelete({ _id: id });
    return deletedPost;
  }

  async updatePost(id, post) {
    const updatedPost = await postModel.findOneAndUpdate({ _id: id }, post);
    return updatedPost;
  }
}

export const postService = new PostService();
