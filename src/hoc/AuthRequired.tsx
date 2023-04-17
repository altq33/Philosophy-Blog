import React, { useContext } from "react";
import { IAuthRequiredProps } from "../types/Interfaces";
import hoc from "./hoc.module.scss";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { Loader } from "../components/Loader/Loader";
export const AuthRequired = observer(
  ({ linkPath, linkTitle, description, children }: IAuthRequiredProps) => {
    const {
      store: { isAuth, isLoading },
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
  }
);
