import React from "react";
import profile from "./profile.module.scss";
import { useParams } from "react-router-dom";

/* TODO:  Итак здесь будет профиль, профиль идет от корня с параметром логин,
 именно по логину будет вытягиваться вся инфа с сервера, если профиль, для разной отрисовки своего профиля и 
 чужих будет проверка на совпадение Login в сторе и в параметре, всё просто. 
 Вариант когда мы берем логин и он не валиден, т.е. сервер возращает ErrorResponse 
 мы просто редиректим на NotFound 
  */

export const Profile = () => {
  const params = useParams();
  return <div>{params.login}</div>;
};
    