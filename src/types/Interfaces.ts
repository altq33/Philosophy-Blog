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