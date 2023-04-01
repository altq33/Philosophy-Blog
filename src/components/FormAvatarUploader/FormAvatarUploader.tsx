import React, { ChangeEvent, useEffect, useState } from "react";
import { InputFile } from "../UI/InputFile";
import { IFormAvatarUploaderProps } from "../../types/Interfaces";
import fau from "./fau.module.scss";

export const FormAvatarUploader: React.FC<IFormAvatarUploaderProps> = ({
  register,
  name,
  avatarUrl,
}) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

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
