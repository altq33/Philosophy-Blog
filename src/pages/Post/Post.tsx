import React from "react";
import post from "./post.module.scss";
import { useLocation, useNavigate, useParams } from "react-router";

export const Post = () => {
  const navigation = useNavigate();
  const params = useParams();

  return (
    <div className={post.wrap_container}>
      <div className={post.posts_container}>
        {params.id + " /" + params.login}
      </div>
    </div>
  );
};
