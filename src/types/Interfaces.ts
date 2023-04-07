import { IGallery, IProfileUser } from "./responses/UserResponse";
import { Control, RegisterOptions, UseFormRegister } from "react-hook-form";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { GroupBase, StylesConfig } from "react-select";
import { FC, ReactElement } from "react";

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

export interface IListItem {
  id: string;
  value: string;
}

export interface IFormSettingsFields {
  login: string;
  email: string;
  quote: string | null;
  avatar: FileList;
  age: number | null;
  location: string | null;
  bio: string | null;
  sex: string | null;
  goals: string[] | null;
  direction: string | null;
  relativismOrAbsolutism: number;
  idealismOrMaterialism: number;
  escapismOrRealism: number;
  dialecticsOrMetaphysics: number;
  qualities: string[] | null;
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

export interface IPicture {
  url: string;
}

export interface IGalleryProps {
  pictures?: IGallery;
}
export interface IProfileMenuProps {
  login: string;
}

export type fieldsName =
  | "login"
  | "email"
  | "quote"
  | "age"
  | "location"
  | "bio"
  | "direction"
  | "sex"
  | "relativismOrAbsolutism"
  | "idealismOrMaterialism"
  | "escapismOrRealism"
  | "dialecticsOrMetaphysics"
  | "avatar"
  | "goals"
  | "qualities";

export interface IAuthRequiredProps {
  description: string;
  linkPath: string;
  linkTitle: string;
  children: React.ReactElement;
}

export interface ICurrentUserProps {
  children: React.ReactElement;
}

export interface IProfileSettingsInput {
  label: string;
  initValue?: string | number;
  type?: string;
  rows?: number;
  cols?: number;
  textarea?: boolean;
  select?: boolean;
  control?: Control<IFormSettingsFields>;
  defaultValue?: string | null;
  autoComplete?: boolean;
  maxLength?: number;
  components?: Partial<
    SelectComponents<
      | {
          value: null;
          label: string;
        }
      | {
          value: string;
          label: string;
        },
      false,
      GroupBase<
        | {
            value: null;
            label: string;
          }
        | {
            value: string;
            label: string;
          }
      >
    >
  >;
  styles?: StylesConfig<
    | {
        value: null;
        label: string;
      }
    | {
        value: string;
        label: string;
      },
    false,
    GroupBase<
      | {
          value: null;
          label: string;
        }
      | {
          value: string;
          label: string;
        }
    >
  >;
  options?: { value: string | null; label: string }[];
  name: fieldsName;
  register: UseFormRegister<IFormSettingsFields>;
  validationSchema?: RegisterOptions;
  isSearchable?: boolean;
}

export interface IInputSliderProps {
  max: number;
  min: number;
  leftLabel: string;
  rightLabel: string;
  value: number;
  name: fieldsName;
  register: UseFormRegister<IFormSettingsFields>;
}

export interface IInputFileProps {
  name: fieldsName;
  register: UseFormRegister<IFormSettingsFields>;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface IFormAvatarUploaderProps extends IInputFileProps {
  avatarUrl: string;
}

export interface IListEditorProps {
  onChange: (value: string[] | null) => void;
  defaultItems: string[] | null;
  placeholder?: string;
  validationRules?: IValidationRules;
  containerStyles?: React.CSSProperties;
  render: (
    el: IListItem,
    deleteItem: (id: string) => void,
    i: number | undefined
  ) => ReactElement;
}

export interface IGoalsListItemProps {
  value: IListItem;
  onDelete: (id: string) => void;
}

export interface IValidationRules {
  maxLength?: number;
  minLength?: number;
  maxElements?: number;
}

export interface IAddItemFormProps {
  addItem: (value: string) => void;
  placeholder?: string;
  validationRules?: IValidationRules;
  currentElements?: number;
}

export interface IFormUserData {
  oldLogin: string;
  user: {
    login: string;
    bio: {
      age: number | null;
      sex: string | null;
      bio: string | null;
      quote: string | null;
      location: string | null;
      philosophyDireсtion: string | null;
      qualities: string[] | null;
      personality: number[] | null;
      goals: string[] | null;
    };
  };
}
