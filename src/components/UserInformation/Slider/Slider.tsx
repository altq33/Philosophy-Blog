import React, { useEffect, useRef, useState } from "react";
import slider from "./slider.module.scss";
import { ISlider } from "../../../types/Interfaces";
export const Slider: React.FC<ISlider> = ({
  left_value,
  right_value,
  position,
}) => {
  return (
    <div className={slider.parent}>
      <div className={slider.titles}>
        <span>{left_value}</span>
        <span>{right_value}</span>
      </div>
      <div className={slider.slider}>
        <div
          className={slider.square}
          style={{
            left: `${(position ? position : 0) * 10}%`,
            [!position ? "transform" : ""]: "none",
            [position == 10 ? "transform" : ""]: "translate(-100%)",
          }}
        ></div>
      </div>
    </div>
  );
};
