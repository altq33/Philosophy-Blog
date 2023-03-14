import React, { useEffect, useState } from "react";
import profile from "./profile.module.scss";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { UserInformation } from "../../components/UserInformation/UserInformation";
import { Slider } from "../../components/UserInformation/Slider/Slider";
import { IProfileUser } from "../../types/responses/UserResponse";
import UserService from "../../services/UserService";
import { NotFound } from "../NotFound/NotFound";

/* TODO:  Итак здесь будет профиль, профиль идет от корня с параметром логин,
 именно по логину будет вытягиваться вся инфа с сервера, если профиль, для разной отрисовки своего профиля и 
 чужих будет проверка на совпадение Login в сторе и в параметре, всё просто. 
 Вариант когда мы берем логин и он не валиден, т.е. сервер возращает ErrorResponse 
 мы просто редиректим на NotFound 
  */

export const Profile = () => {
  const params = useParams();
  const [user, setUser] = useState<IProfileUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getProfile(params.login!!).then((res) => {
      setUser(res.data);
    });
  }, []);

  return !user ? (
    <NotFound />
  ) : (
    <div className={profile.wrap_container}>
      <div className={profile.profile_row}>
        <ProfileCard user={user} />
        <div className={profile.middle_section}>
          <UserInformation title="Bio">
            <div className={profile.bio}>{user.bio.bio}</div>
          </UserInformation>
          <UserInformation title="Personality">
            <div className={profile.slider_block}>
              <Slider
                position={user.bio.personality[0]}
                left_value="Introvert"
                right_value="Extrovert"
              />
              <Slider
                position={user.bio.personality[1]}
                left_value="Analytical"
                right_value="Creative"
              />
              <Slider
                position={user.bio.personality[2]}
                left_value="Loyal"
                right_value="Fickle"
              />
              <Slider
                position={user.bio.personality[3]}
                left_value="Passive"
                right_value="Active"
              />
            </div>
          </UserInformation>
        </div>
      </div>
    </div>
  );
};
