import React, { useEffect, useState } from "react";
import users from "./users.module.scss";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import IUser from "../../types/IUser";
import { UserMiniCard } from "./UserMiniCard";
import { IPublicUser } from "../../types/responses/UserResponse";
import { Link } from "react-router-dom";

export const Users = () => {
  const [usersList, setUsersList] = useState<any>([]);
  useEffect(() => {
    UserService.getUsers().then((res) => {
      setUsersList(res.data);
    });
  }, []);

  return !usersList.length ? (
    <div className={users.wrap_container}>
      {" "}
      <h2 className={users.warning}>
        Для просмотра пользователей <Link to="/users/authorization" className={users.link}>авторизуйтесь!</Link>
      </h2>
    </div>
  ) : (
    <div className={users.wrap_container}>
      <ul className={users.users_list}>
        {usersList.map((el: IPublicUser) => (
          <UserMiniCard
            key={el.login}
            login={el.login}
            avatarUrl={el.avatarUrl}
            since={el.createdAt}
            sex={el.bio.sex}
          />
        ))}
      </ul>
    </div>
  );
};
