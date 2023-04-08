import React from "react";
import { Link } from "react-router-dom";
import { IUserListItemProps } from "../../types/Interfaces";
import profileMenu from "./profileMenu.module.scss";
export const ProfileMenuItem: React.FC<IUserListItemProps> = ({
  to,
  title,
  icon,
  onClick,
}) => {
  return (
    <li>
      {" "}
      <Link
        to={to}
        title={title}
        className={profileMenu.link}
        onClick={onClick}
      >
        <img src={icon} alt={title} />
      </Link>
    </li>
  );
};
