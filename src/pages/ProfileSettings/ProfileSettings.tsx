import React from "react";
import profileSettings from "./profileSettings.module.scss";

export const ProfileSettings = () => {
  return (
    <div className={profileSettings.wrap_container}>
      <div className={profileSettings.settings_container}></div>
    </div>
  );
};
