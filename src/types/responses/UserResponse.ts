import { IPost } from "../Interfaces";

export interface IPublicUser {
  login: string;
  bio: {
    sex: string;
  };
  createdAt: string;
  avatarUrl: string;
}

export interface IProfileUser {
  login: string;
  avatarUrl: string;
  role: string;
  posts: IPost[];
  bio: {
    age: number;
    sex: string;
    bio: string;
    quote: string;
    location: string;
    philosophyDireсtion: string;
    qualities: string[];
    personality: number[];
    goals: string[];
  };
}

export interface IGallery {
  url: string;
}
