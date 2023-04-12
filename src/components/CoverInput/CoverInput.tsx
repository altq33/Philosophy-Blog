import React from "react";
import cover_input from "./cover_input.module.scss";
import { ICoverInputProps } from "../../types/Interfaces";

export const CoverInput: React.FC<ICoverInputProps> = ({
  register,
  name,
  onChange,
}) => {
  return (
    <label htmlFor="inputFile" className={cover_input.file_label}>
      Добавить обложку
      <input
        className={cover_input.file_input}
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        id="inputFile"
        {...register(name)}
        onChange={onChange}
      />
    </label>
  );
};
