import React from "react";
import { Quality } from "./Quality";
import { InfoUserField } from "./InfoUserField";
import info_user from "./info_user.module.scss";
export const InfoUser = () => {
  return (
    <div className={info_user.info_card}>
      <div className={info_user.fields}>
        <InfoUserField field="Age:" user_field="26" />
        <InfoUserField field="Status:" user_field="Single" />
        <InfoUserField field="Location:" user_field="Brooklyn" />
        <InfoUserField field="Trend:" user_field="Humanism" />
      </div>
      <ul className={info_user.quality_ul}>
        <Quality quality_user="Organized" />
        <Quality quality_user="Protective" />
        <Quality quality_user="Practical" />
        <Quality quality_user="Hardworking" />
        <Quality quality_user="Passionate" />
        <Quality quality_user="Punctual" />
      </ul>
    </div>
  );
};
