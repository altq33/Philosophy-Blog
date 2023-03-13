import React from "react";
import { IUserField } from "../../../types/Interfaces";
import info_user from "./info_user.module.scss";
export const InfoUserField: React.FC<IUserField> = ({ title, value}) => {
  return (
    <p className={info_user.field}>
      {title}
      <span>{value}</span>
    </p>
  );
};
