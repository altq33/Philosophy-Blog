import { Control, RegisterOptions, UseFormRegister } from "react-hook-form";
import { IProfileUser } from "./responses/UserResponse";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { GroupBase, StylesConfig } from "react-select";

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
  | "goals";

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

export interface IGoalsEditorProps {
  onChange: (value: string[] | null) => void;
  defaultGoals: string[] | null;
}
