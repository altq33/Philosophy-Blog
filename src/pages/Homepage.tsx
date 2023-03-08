import React from "react";
import { useLocation } from "react-router-dom";

export const Homepage = () => {
  const location = useLocation();

  return (
    <div>
      {location.state == "unwanted-try"
        ? "БЛЯ КУДА ТЫ ЛЕЗЕШЬ ДРУГ"
        : "НОРМ ВСЁ"}
    </div>
  );
};
