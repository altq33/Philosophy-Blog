import React, { useContext } from "react";
import profile from "./profile.module.scss";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { UserInformation } from "../../components/UserInformation/UserInformation";
import { Slider } from "../../components/UserInformation/Slider/Slider";
import { NotFound } from "../NotFound/NotFound";
import { UserList } from "../../components/UserList/UserList";
import { useUserProfile } from "../../hooks/useUserProfile";
import { Loader } from "../../components/Loader/Loader";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { UserPost } from "../../components/UserPost/UserPost";
import { UserPostList } from "../../components/UserPostList/UserPostList";

export const Profile: React.FC = () => {
  const { user, isLoading } = useUserProfile();
  const { store } = useContext(Context);

  return isLoading ? (
    <div className={profile.wrap_container}>
      <Loader />
    </div>
  ) : !user ? (
    <NotFound />
  ) : (
    <div className={profile.wrap_container}>
      <div className={profile.profile_row}>
        <ProfileCard user={user!!} />
        <div className={profile.middle_section}>
          <UserInformation title="Биография">
            <div className={profile.bio}>
              {user?.bio.bio ? user?.bio.bio : "Не указано"}
            </div>
          </UserInformation>
          <UserInformation title="Личность">
            <div className={profile.slider_block}>
              <Slider
                position={user?.bio.personality[0] ?? 5}
                left_value="Релативизм"
                right_value="Абсолютизм"
              />
              <Slider
                position={user?.bio.personality[1] ?? 5}
                left_value="Идеализм"
                right_value="Материализм"
              />
              <Slider
                position={user?.bio.personality[2] ?? 5}
                left_value="Эскапизм"
                right_value="Реализм"
              />
              <Slider
                position={user?.bio.personality[3] ?? 5}
                left_value="Диалектика"
                right_value="Метафизика"
              />
            </div>
          </UserInformation>
          <UserInformation title="Цели">
            <ul className={profile.user_list}>
              {user?.bio?.goals?.length ? (
                user.bio.goals.map((goal, index) => {
                  return <UserList key={index} value={goal} />;
                })
              ) : (
                <h3 className={profile.no_goals}>Целей нет</h3>
              )}  
            </ul>
          </UserInformation>
        </div>
        <div className={profile.posts_container}>
          {store.user.login == user.login && (
            <Link
              to={`/${store.user.login}/create-post`}
              className={profile.create_post_btn}
            >
              Создать пост
            </Link>
          )}

          <UserPostList posts={user.posts} />
        </div>
      </div>
    </div>
  );
};
