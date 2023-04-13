import axios, { AxiosResponse } from "axios";
import $api from "../http";
import IUser from "../types/IUser";
import { IGallery, IProfileUser } from "../types/responses/UserResponse";
import { IFormUserData } from "../types/Interfaces";

export default class PostService {
  static async createPost(post: FormData) {
    return $api.post("/posts", post);
  }

  static async getAllPosts() {
    return $api.get("/posts");
  }
}
