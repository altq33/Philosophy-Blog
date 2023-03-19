import React, { useEffect, useState } from "react";
import profile from "./profile.module.scss";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { UserInformation } from "../../components/UserInformation/UserInformation";
import { Slider } from "../../components/UserInformation/Slider/Slider";
import { IProfileUser } from "../../types/responses/UserResponse";
import UserService from "../../services/UserService";
import { NotFound } from "../NotFound/NotFound";
import { UserList } from "../../components/UserList/UserList";

export const Profile = () => {
  const params = useParams();
  const [user, setUser] = useState<IProfileUser | null>(null);

  useEffect(() => {
    scrollTo(0, 0);
    UserService.getProfile(params.login!!).then((res) => {
      setUser(res.data);
    });
  }, [params.login]);

  return !user ? (
    <NotFound />
  ) : (
    <div className={profile.wrap_container}>
      <div className={profile.profile_row}>
        <ProfileCard user={user} />
        <div className={profile.middle_section}>
          <UserInformation title="Биография">
            <div className={profile.bio}>
              {user.bio.bio ? user.bio.bio : "Не указано"}
            </div>
          </UserInformation>
          <UserInformation title="Личность">
            <div className={profile.slider_block}>
              <Slider
                position={user.bio.personality[0]}
                left_value="Интроверт"
                right_value="Экстроверт"
              />
              <Slider
                position={user.bio.personality[1]}
                left_value="Аналитик"
                right_value="Творческий"
              />
              <Slider
                position={user.bio.personality[2]}
                left_value="Верный"
                right_value="Переменный"
              />
              <Slider
                position={user.bio.personality[3]}
                left_value="Пассив"
                right_value="Актив"
              />
            </div>
          </UserInformation>
          <UserInformation title="Цели">
            <ul className={profile.user_list}>
              {user.bio.goals.length ? (
                user.bio.goals.map((goal, index) => {
                  return <UserList key={index} value={goal} />;
                })
              ) : (
                <h3 className={profile.no_goals}>Целей нет</h3>
              )}
            </ul>
          </UserInformation>
        </div>
      </div>
    </div>
  );
};
