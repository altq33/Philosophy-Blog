import React from "react";
import loader from "./loader.module.scss";
export const Loader: React.FC = () => {
  return (
    <div className={loader.loader}>
      <img className={loader.image_loader} src="src/assets/GIF/loader.gif" alt="wait..." />
    </div>
  );
};
