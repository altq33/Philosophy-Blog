import React, { useEffect, useRef } from "react";
import cover_input from "./cover_input.module.scss";
import { ICoverInputProps } from "../../types/Interfaces";
import { SERVER_HOST } from "../../http";

export const CoverInput: React.FC<ICoverInputProps> = ({
  register,
  name,
  onChange,
  defaultValue,
  setValue,
  setFile,
}) => {
  const inputDOM = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (defaultValue) {
      fetch(`${SERVER_HOST}/${defaultValue}`)
        .then((res) => res.blob())
        .then((data) => {
          let file = new File([data], `${defaultValue.split("/").at(-1)}`, {
            type: `image/${defaultValue.split(".").at(-1)!!}`,
            lastModified: new Date().getTime(),
          });
          let container = new DataTransfer();
          container.items.add(file);
          setValue!!("cover", container.files);
          setFile(container.files[0]);
        });
    }
  }, [defaultValue]);

  return (
    <label htmlFor="inputFile" className={cover_input.file_label}>
      Добавить обложку
      <input
        className={cover_input.file_input}
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        id="inputFile"
        {...register(name)}
        ref={inputDOM}
        onChange={onChange}
      />
    </label>
  );
};
