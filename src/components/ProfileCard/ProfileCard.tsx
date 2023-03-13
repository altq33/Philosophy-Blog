import React from "react";
import { AvatarBlock } from "./AvatarBlock/AvatarBlock";
import { InfoUser } from "./InfoUser/InfoUser";
import { useParams } from "react-router-dom";
import profile_card from "./profile_card.module.scss";
export const PorfileCard: React.FC = () => {
  const paramsLogin = useParams();
  return (
    <div className={profile_card.card}>
      <AvatarBlock
        avatar="src\assets\Img\avatar.jpg"
        userLogin={paramsLogin.login}
        role="User"
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
        <p className={profile_card.quote}>
          I'm looking for a site that will simplify the planning of my business
          trips.
        </p>
      </div>
      <InfoUser />
    </div>
  );
};
