import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../types/responses/AuthResponse";

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/authorization", { login, password });
  }

  static async registration(
    login: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", { login, email, password });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/logout");
  }

  static async getUsers() {
    return $api.get("/users");
  }
}
