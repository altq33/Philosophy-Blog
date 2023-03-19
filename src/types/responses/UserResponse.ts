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
