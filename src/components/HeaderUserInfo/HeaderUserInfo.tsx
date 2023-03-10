import React, { useContext, useState } from "react";
import hui from "./hui.module.scss";
import { Context } from "../../main";
import avatar from "../../assets/Img/base-profile-avatar.png";
import { IHeaderUserInfoProps } from "../../types/Interfaces";
import { Link } from "react-router-dom";
import UserLinks from "./UserLinks";

export const HeaderUserInfo: React.FC<IHeaderUserInfoProps> = ({
  name,
  avatarUrl,
}) => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const hideDropdown = () => setIsDropDownActive(false);
  const showDropdown = () => setIsDropDownActive(true);

  return (
    <div
      className={hui.outer}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <Link to={`/${name}`}>
        <div
          className={[hui.wrap, isDropDownActive ? hui.active_link : ""].join(
            " "
          )}
        >
          <img className={hui.avatar} src={avatar} alt="user-avatar" />
          <h3 className={hui.login} title={name}>
            {name}
          </h3>
        </div>
      </Link>
      <UserLinks
        isActive={isDropDownActive}
        changeVisibility={showDropdown}
        userName={name}
      />
    </div>
  );
};
