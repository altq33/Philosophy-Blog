import axios, { AxiosResponse } from "axios";
import $api from "../http";

export default class PostService {
  static async createPost(post: FormData) {
    return $api.post("/posts", post);
  }

  static async deletePost(id: string) {
    return $api.delete(`/posts/${id}`);
  }
}
