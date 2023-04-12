import React, { ChangeEvent, useEffect, useState } from "react";
import { InputFile } from "../UI/InputFile";
import { IFormAvatarUploaderProps } from "../../types/Interfaces";
import fau from "./fau.module.scss";
import { useFilePreview } from "../../hooks/useFilePreview";

export const FormAvatarUploader: React.FC<IFormAvatarUploaderProps> = ({
  register,
  name,
  avatarUrl,
}) => {
  const { selectedFile, preview, onSelectFile } = useFilePreview();

  return (
    <div className={fau.wrap}>
      <img
        src={selectedFile ? preview : avatarUrl}
        alt="avatar"
        className={fau.avatar}
      />
      <InputFile register={register} name={name} onChange={onSelectFile} />
    </div>
  );
};
