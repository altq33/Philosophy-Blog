import React, { useEffect, useRef } from "react";
import { IUserMiniCardProps } from "../../types/Interfaces";
import users from "./users.module.scss";
import { Link } from "react-router-dom";
import baseAvatar from "../../assets/Img/base-profile-avatar.png";
import { SERVER_HOST } from "../../http";
import VanillaTilt from "vanilla-tilt";

export const UserMiniCard: React.FC<IUserMiniCardProps> = ({
  login,
  since,
  sex,
  avatarUrl,
}) => {
  const card = useRef<HTMLLIElement>(null);

  useEffect(() => {
    VanillaTilt.init(card.current!!, {
      max: 15,
      glare: true,
      "max-glare": 0.1,
      reverse: true,
      transition: true,
      easing: "ease",
    });
  }, []);

  const convertDate = (date: string) => {
    const months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];

    const correctDate = new Date(date);
    return `${months[correctDate.getMonth()]} ${correctDate.getFullYear()}`;
  };

  return (
    <li ref={card} className={users.card}>
      <Link style={{ transform: "translateZ(10px)" }} to={`/${login}`}>
        <img
          className={users.avatar}
          src={avatarUrl ? `${SERVER_HOST}/${avatarUrl}` : baseAvatar}
          alt={`${login} avatar`}
        />
      </Link>

      <Link
        style={login.length > 8 ? { display: "block" } : {}}
        to={`/${login}`}
        title={login}
        className={users.login}
      >
        {login}
      </Link>
      <p className={users.dict}>Пол: {sex ? sex : "Не указан"}</p>
      <p className={users.dict}>На сайте с</p>
      <p className={users.dict}>{convertDate(since)}</p>
    </li>
  );
};
