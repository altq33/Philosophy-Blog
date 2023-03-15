import { IProfileUser } from "./responses/UserResponse";

export interface IBtn {
  className: string;
  text: string;
}

export interface IFormRegFields {
  login: string;
  email: string;
  password: string;
  passwordRepeated: string;
}

export interface ISubmitErrorProps {
  message: string;
}

export interface IFormAuthFields {
  login: string;
  password: string;
}

export interface IHeaderUserInfoProps {
  name: string;
  avatarUrl: string;
}

export interface IUserLinksProps {
  isActive: boolean;
  userName: string;
  changeVisibility: () => void;
}

export interface IUserListItemProps {
  to: string;
  title: string;
  icon: string;
  onClick?: () => void;
}

export interface IQualityUser {
  value: string;
}

export interface IUserField {
  title: string;
  value: string | number;
}

export interface IAvatarBlock {
  avatar: string;
  userLogin: string | undefined;
  role: string;
}

export interface IUserMiniCardProps {
  avatarUrl: string;
  sex: string;
  login: string;
  since: string;
}

export interface IUserInfo {
  title: string;
  children: React.ReactNode;
}

export interface ISlider {
  left_value: string;
  right_value: string;
  position: number;
}

export interface IProfileCardProps {
  user: IProfileUser;
}

export interface IUserInfoProps {
  age: number | string;
  sex: string;
  location: string;
  direction: string;
  qualities: string[];
}

export interface IUserList {
  value: string;
}
