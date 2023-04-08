import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { ICurrentUserProps } from "../types/Interfaces";
import { Navigate, useLocation, useParams } from "react-router-dom";
import hoc from "./hoc.module.scss";
import { observer } from "mobx-react-lite";

export const CurrentUser = observer(({ children }: ICurrentUserProps) => {
  const { store } = useContext(Context);
  const params = useParams();

  if (store.isLoading) return null; // TODO: сюда лоудер компонент

  return params.login == store.user.login ? (
    children
  ) : (
    <Navigate to={`/${store.user.login}`} />
  );
});
