import React from "react";
import { ISubmitErrorProps } from "../../types/Interfaces";
import suberr from "./suberr.module.scss";

export const SubmitError: React.FC<ISubmitErrorProps> = ({ message, styles }) => {
  return (
    <div style={styles}>
      <div className={suberr.container}>ОШИБКА</div>
      <div className={suberr.errors}>{message}</div>
    </div>
  );
};
