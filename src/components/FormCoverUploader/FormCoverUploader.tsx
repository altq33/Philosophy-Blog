import React from "react";
import fcu from "./fcu.module.scss";
import { IFormCoverUploaderProps } from "../../types/Interfaces";
import { CoverInput } from "../CoverInput/CoverInput";
import { useFilePreview } from "../../hooks/useFilePreview";

export const FormCoverUploader: React.FC<IFormCoverUploaderProps> = ({
  register,
  name,
  resetFile,
}) => {
  const { selectedFile, preview, onSelectFile, setSelectedFile } =
    useFilePreview();

  const removeSelectedFile = () => {
    resetFile("cover");
    setSelectedFile(undefined);
  };

  return (
    <div className={fcu.wrap}>
      {selectedFile && <img src={preview} alt="cover" className={fcu.cover} />}
      <div className={fcu.buttons_container}>
        <CoverInput register={register} name={name} onChange={onSelectFile} />
        {selectedFile && (
          <button
            type="button"
            className={fcu.delete_cover}
            onClick={removeSelectedFile}
          >
            Удалить обложку
          </button>
        )}
      </div>
    </div>
  );
};