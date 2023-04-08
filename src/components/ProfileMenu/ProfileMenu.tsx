import React, { useContext } from "react";
import profileMenu from "./profileMenu.module.scss";
import settingsIcon from "../../assets/icons/settings.svg";
import { IProfileMenuProps } from "../../types/Interfaces";
import { ProfileMenuItem } from "./ProfileMenuItem";
import usersIcon from "../../assets/icons/users-icon.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

export const ProfileMenu: React.FC<IProfileMenuProps> = observer(
  ({ login }) => {
    const { store } = useContext(Context);

    return (
      <nav className={profileMenu.nav}>
        <ul>
          <ProfileMenuItem
            title="Настройки"
            to={`/${login}/settings`}
            icon={settingsIcon}
          />
          <ProfileMenuItem
            title="Пользователи"
            to={`/users`}
            icon={usersIcon}
          />
          <ProfileMenuItem
            title="Выйти"
            to={`/users/authorization`}
            icon={logoutIcon}
            onClick={store.logout.bind(store)}
          />
        </ul>
      </nav>
    );
  }
);
