import React, { useEffect, useState } from "react";
import users from "./users.module.scss";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import IUser from "../../types/IUser";
import { UserMiniCard } from "./UserMiniCard";
import { IPublicUser } from "../../types/responses/UserResponse";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const Users = () => {
  const [usersList, setUsersList] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    UserService.getUsers()
      .then((res) => {
        setLoading(false);
        setUsersList(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className={users.wrap_container}>
      {loading ? (
        <div className={users.wrapper_loader}>
          <Loader />
        </div>
      ) : (
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
      )}
    </div>
  );
};
