import React from "react";
import loader from "./loader.module.scss";
import loaderGIF from "../../assets/GIF/loader.gif";

export const Loader: React.FC = () => {
  return (
    <div className={loader.loader}>
      <img className={loader.image_loader} src={loaderGIF} alt="wait..." />
    </div>
  );
};
