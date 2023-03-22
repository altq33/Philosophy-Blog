import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { ICurrentUserProps } from "../types/Interfaces";
import { Navigate, useLocation, useParams } from "react-router-dom";
import hoc from "./hoc.module.scss";
import { observer } from "mobx-react-lite";

export const CurrentUser = observer(({ children }: ICurrentUserProps) => {
  const {
    store: { user },
  } = useContext(Context);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    user.login && setIsLoading(false);
  }, [user.login]);

  if (isLoading) return null;  // TODO: сюда лоудер компонент

  return params.login == user.login ? (
    children
  ) : (
    <Navigate to={`/${user.login}`} />
  );
});
