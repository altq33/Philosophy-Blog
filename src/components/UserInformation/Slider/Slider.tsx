import React, { useEffect, useRef, useState } from "react";
import slider from "./slider.module.scss";
import { ISlider } from "../../../types/Interfaces";
export const Slider: React.FC<ISlider> = ({
  left_value,
  right_value,
  position,
}) => {
  const [curWidth, setCurWidth] = useState(0);
  const line = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    setCurWidth(line.current?.offsetWidth!! / 10);
  };
// FIXME: вынести логику повыше шобы был один ивент листенер 
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCurWidth(line.current?.offsetWidth!! / 10);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={slider.parent}>
      <div className={slider.titles}>
        <span>{left_value}</span>
        <span>{right_value}</span>
      </div>
      <div ref={line} className={slider.slider}>
        <div
          className={slider.square}
          style={{ left: `${position * curWidth - 7.5}px` }}
        ></div>
      </div>
    </div>
  );
};
