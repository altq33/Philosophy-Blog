import React from "react";
import { Quality } from "./Quality";
import { InfoUserField } from "./InfoUserField";
import info_user from "./info_user.module.scss";
import { IUserInfoProps } from "../../../types/Interfaces";
export const InfoUser: React.FC<IUserInfoProps> = ({
  age,
  sex,
  location,
  direction,
  qualities,
}) => {
  return (
    <div className={info_user.info_card}>
      <div className={info_user.fields}>
        <InfoUserField title="Возраст:" value={age} />
        <InfoUserField title="Пол:" value={sex} />
        <InfoUserField title="Локация:" value={location} />
        <InfoUserField title="Направление:" value={direction} />
      </div>
      <ul className={info_user.quality_ul}>
        {qualities.map((el, i) => {
          return <Quality key={i} value={el} />;
        })}
      </ul>
    </div>
  );
};
