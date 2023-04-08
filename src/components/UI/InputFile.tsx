import React from "react";
import { IInputFileProps } from "../../types/Interfaces";
import psi from "./psi.module.scss";
export const InputFile: React.FC<IInputFileProps> = ({
  name,
  register,
  onChange,
}) => {
  return (
    <label htmlFor="inputFile" className={psi.file_label}>
      <input
        className={psi.file_input}
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        id="inputFile"
        {...register(name)}
        onChange={onChange}
      />
    </label>
  );
};
