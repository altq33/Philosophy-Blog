import React from "react";
import { IUserField } from "../../../types/Interfaces";
import info_user from "./info_user.module.scss";
export const InfoUserField: React.FC<IUserField> = ({ field, user_field }) => {
  return (
    <p className={info_user.field}>
      {field}
      <span>{user_field}</span>
    </p>
  );
};
