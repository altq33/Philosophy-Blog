import React from "react";
import { ISubmitErrorProps } from "../../types/Interfaces";
import suberr from "./suberr.module.scss";

export const SubmitError: React.FC<ISubmitErrorProps> = ({ message }) => {
  return (
    <div>
      <div className={suberr.container}>ОШИБКА</div>
      <div className={suberr.errors}>{message}</div>
    </div>
  );
};
