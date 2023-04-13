import axios, { AxiosResponse } from "axios";
import $api from "../http";

export default class PostService {
  static async createPost(post: FormData) {
    return $api.post("/posts", post);
  }

  static async getAllPosts() {
    return $api.get("/posts");
  }

  static async deletePost(id: string) {
    return $api.delete(`/posts/${id}`);
  }

  static async getPostById(id: string) {
    return $api.get(`/posts/${id}`);
  }
}
