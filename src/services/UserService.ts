import { AxiosResponse } from "axios";
import $api from "../http";
import IUser from "../types/IUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get("/users");
  }
}
