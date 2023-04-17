import React, { useEffect, useState } from "react";
import like from "./like.module.scss";
import { ILikeProps } from "../../types/Interfaces";
import axios from "axios";
import $api, { SERVER_HOST } from "../../http";
import likeIcon from "../../assets/icons/like.svg";
import notlikeIcon from "../../assets/icons/notlike.svg";
import { useNavigate } from "react-router-dom";

export const Like: React.FC<ILikeProps> = ({ userId, postId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    $api.post(`/posts/${postId}/like/check`, { user: userId }).then((res) => {
      setIsLiked(res.data.status.isLiked);
      setNumber(res.data.status.count);
    });
  }, []);

  const changeLikeStatus = () => {
    if (!userId) {
      navigate("/users/authorization");
      return;
    }
    if (isLiked) {
      $api.delete(`/posts/${postId}/like/${userId}`).then((res) => {
        setIsLiked(false);
        setNumber((prev) => --prev);
      });
      return;
    }
    $api.post(`/posts/${postId}/like`, { user: userId }).then((res) => {
      setIsLiked(true);
      setNumber((prev) => ++prev);
    });
  };

  return (
    <div className={like.container}>
      <img
        onClick={changeLikeStatus}
        src={isLiked ? likeIcon : notlikeIcon}
        alt="heart"
        className={like.img}
      />
      <p className={like.count}>{number}</p>
    </div>
  );
};
