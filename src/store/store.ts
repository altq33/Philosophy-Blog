import { makeAutoObservable } from "mobx";
import IUser from "../types/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../types/responses/AuthResponse";
import { API_URL } from "../http";

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(status: boolean) {
    this.isLoading = status;
  }

  setAuth(status: boolean) {
    this.isAuth = status;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem("accessToken", response.data.accessToken);
      this.setAuth(true);
      const user: IUser = { email: response.data.email, id: response.data.id };
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  async registration(login: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(login, email, password);
      localStorage.setItem("accessToken", response.data.accessToken);
      this.setAuth(true);
      const user: IUser = { email: response.data.email, id: response.data.id };
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("accessToken");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (error) {
      console.log(error);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      this.setAuth(true);
      const user: IUser = { email: response.data.email, id: response.data.id };
      this.setUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }
}
