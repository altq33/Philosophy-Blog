import React from "react";
import { useLocation } from "react-router-dom";
import layout from "../components/Layout/layout.module.scss";
export const Homepage = () => {
  const location = useLocation();

  return (
    <div className={layout.wrap_container}>
      <div>
        {location.state == "unwanted-try"
          ? "БЛЯ КУДА ТЫ ЛЕЗЕШЬ ДРУГ"
          : "НОРМ ВСЁ"}
      </div>
    </div>
  );
};
