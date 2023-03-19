import React from "react";
import { AvatarBlock } from "./AvatarBlock/AvatarBlock";
import { InfoUser } from "./InfoUser/InfoUser";
import { useParams } from "react-router-dom";
import profile_card from "./profile_card.module.scss";
import avatar from "../../assets/Img/base-profile-avatar.png";
import { IProfileCardProps } from "../../types/Interfaces";
import { SERVER_HOST } from "../../http";

export const ProfileCard: React.FC<IProfileCardProps> = ({ user }) => {
  return (
    <div className={profile_card.card}>
      <AvatarBlock
        avatar={ user.avatarUrl ? `${SERVER_HOST}/${user.avatarUrl}` : avatar}
        userLogin={user.login}
        role={user.role}
      />
      <div className={profile_card.quote_block}>
        <div className={profile_card.svg_quote}>
          <svg
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.785522 0V22.6109L12.0568 11.3055V0H0.785522Z"
              fill="#FFA50E"
            />
          </svg>
          <svg
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.785522 0V22.6109L12.0568 11.3055V0H0.785522Z"
              fill="#FFA50E"
            />
          </svg>
        </div>
        <p className={profile_card.quote}>{user.bio.quote ? user.bio.quote : "Не указано"}</p>
      </div>
      <InfoUser
        age={user.bio.age ? user.bio.age : "Не указано"}
        location={user.bio.location ? user.bio.location:  "Не указано"}
        sex={user.bio.sex ? user.bio.sex :  "Не указано"}
        direction={user.bio.philosophyDireсtion ? user.bio.philosophyDireсtion : "Не указано"}
        qualities={user.bio.qualities}
      />
    </div>
  );
};
