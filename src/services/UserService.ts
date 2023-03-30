import { AxiosResponse } from "axios";
import $api from "../http";
import IUser from "../types/IUser";
import { IGallery, IProfileUser } from "../types/responses/UserResponse";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get("/users");
  }

  static async getProfile(login: string): Promise<AxiosResponse<IProfileUser>> {
    return $api.get(`/users/${login}`);
  }

  static async getPictures(): Promise<AxiosResponse<IGallery[]>> {
    return $api.get(`/gallery`);
  }
}
