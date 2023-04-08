import React from "react";
import { IInputSliderProps } from "../../types/Interfaces";
import psi from "./psi.module.scss";
export const InputSlider: React.FC<IInputSliderProps> = ({
  leftLabel,
  rightLabel,
  max,
  min,
  register,
  name,
  value,
}) => {
  return (
    <label className={psi.label} htmlFor="">
      <div className={psi.labels_container}>
        <h2 className={psi.label_text}>{leftLabel}</h2>
        <h2 className={psi.label_text}>{rightLabel}</h2>
      </div>
      <input
        type="range"
        max={max}
        min={min}
        {...register(name, { value: value, valueAsNumber: true })}
      />
    </label>
  );
};
