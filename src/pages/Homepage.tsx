import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import layout from "../components/Layout/layout.module.scss";
import { Context } from "../main";
export const Homepage = () => {
  const { store } = useContext(Context);
  return (
    <div className={layout.wrap_container}>
      <div></div>
    </div>
  );
};
