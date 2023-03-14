import React, { useState } from "react";
import profile from "./profile.module.scss";
import { useParams } from "react-router-dom";
import { PorfileCard } from "../../components/ProfileCard/ProfileCard";
import { UserInformation } from "../../components/UserInformation/UserInformation";
import { Slider } from "../../components/UserInformation/Slider/Slider";

/* TODO:  Итак здесь будет профиль, профиль идет от корня с параметром логин,
 именно по логину будет вытягиваться вся инфа с сервера, если профиль, для разной отрисовки своего профиля и 
 чужих будет проверка на совпадение Login в сторе и в параметре, всё просто. 
 Вариант когда мы берем логин и он не валиден, т.е. сервер возращает ErrorResponse 
 мы просто редиректим на NotFound 
  */

export const Profile = () => {
  const params = useParams();

  return (
    <div className={profile.wrap_container}>
      <div className={profile.profile_row}>
        <PorfileCard />
        <div className={profile.middle_section}>
          <UserInformation
            title="Bio"
            children={
              <div className={profile.bio}>
                {params.login} is a Regional Director who travels 4-8 times each
                month for work. She has a specific region in which she travels,
                and she often visits the same cities and stays at the same
                hotel. She is frustrated by the fact that no matter how
                frequently she takes similar trips, she spends hours of her day
                booking travel. She expects her travel solutions to be as
                organized as she is.
              </div>
            }
          />
          <UserInformation
            title="Personality"
            children={
              <div className={profile.slider_block}>
                <Slider
                  style={{left: 1 * 40 }}
                  left_value="Introvert"
                  right_value="Extrovert"
                />
                <Slider
                  style={{right: 1 * 40 }}
                  left_value="Analytical"
                  right_value="Creative"
                />
                <Slider
                  style={{left: 2 * 40 }}
                  left_value="Loyal"
                  right_value="Fickle"
                />
                <Slider
                  style={{right: 2 * 40 }}
                  left_value="Passive"
                  right_value="Active"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
