import React, { useContext } from "react";
import { IAuthRequiredProps } from "../types/Interfaces";
import hoc from "./hoc.module.scss";
import { Link } from "react-router-dom";
import { Context } from "../main";
export const AuthRequired = ({
  linkPath,
  linkTitle,
  description,
  children,
}: IAuthRequiredProps) => {
  const {
    store: { isAuth },
  } = useContext(Context);

  return isAuth ? (
    children
  ) : (
    <div className={hoc.wrap_container}>
      <h2 className={hoc.warning}>
        {description}
        <Link to={linkPath} className={hoc.link}>
          {linkTitle}
        </Link>
      </h2>
    </div>
  );
};
