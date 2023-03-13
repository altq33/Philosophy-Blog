import React from "react";
import { Quality } from "./Quality";
import { InfoUserField } from "./InfoUserField";
import info_user from "./info_user.module.scss";
export const InfoUser = () => {
  return (
    <div className={info_user.info_card}>
      <div className={info_user.fields}>
        <InfoUserField title="Age:" value="26" />
        <InfoUserField title="Status:" value="Single" />
        <InfoUserField title="Location:" value="Brooklyn" />
        <InfoUserField title="Trend:" value="Humanism" />
      </div>
      <ul className={info_user.quality_ul}>
        <Quality value="Organized" />
        <Quality value="Protective" />
        <Quality value="Practical" />
        <Quality value="Hardworking" />
        <Quality value="Passionate" />
        <Quality value="Punctual" />
      </ul>
    </div>
  );
};
