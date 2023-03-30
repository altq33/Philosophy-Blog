import React, { useContext } from "react";
import hui from "./hui.module.scss";
import { IUserLinksProps } from "../../types/Interfaces";
import { UserListItem } from "./UserListItem";
import profileIcon from "../../assets/icons/profile.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import usersIcon from "../../assets/icons/users-icon.svg";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

const UserLinks: React.FC<IUserLinksProps> = ({
  isActive,
  changeVisibility,
  userName,
}) => {
  const { store } = useContext(Context);
  
  return (
    <div
      onMouseEnter={changeVisibility}
      className={[hui.modal, isActive ? hui.active : ""].join(" ")}
    >
      <div className={hui.modal_content}>
        <div className={hui.part_title}>Аккаунт</div>
        <ul className={hui.list}>
          <UserListItem
            title="Профиль"
            to={`/${userName}`}
            icon={profileIcon}
          />
        </ul>
        <div className={hui.part_title}>Сайт</div>
        <ul className={hui.list}>
          <UserListItem title="Пользователи" to={`/users`} icon={usersIcon} />
          <UserListItem
            title="Выйти"
            to={`/users/authorization`}
            icon={logoutIcon}
            onClick={store.logout.bind(store)}
          />
        </ul>
      </div>
    </div>
  );
};
export default observer(UserLinks);
