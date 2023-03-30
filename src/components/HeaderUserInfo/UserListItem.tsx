import React from "react";
import { IUserListItemProps } from "../../types/Interfaces";
import { Link } from "react-router-dom";
import hui from "./hui.module.scss";

export const UserListItem: React.FC<IUserListItemProps> = ({
  title,
  to,
  icon,
  onClick,
}) => {
  return (
    <li className={hui.list_link}>
      <Link to={to} onClick={onClick}>
        <img src={icon} alt="" />
        <p>{title}</p>
      </Link>
    </li>
  );
};
