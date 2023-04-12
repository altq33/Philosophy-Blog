import React, { useContext } from "react";
import user_posts from "./user_posts.module.scss";
import { IUserPosts } from "../../types/Interfaces";
import { Context } from "../../main";
export const UserPosts: React.FC<IUserPosts> = ({
  src,
  title,
  description,
  user,
}) => {
  const { store } = useContext(Context);

  return (
    <div className={user_posts.posts_col}>
      <img src={src} className={user_posts.image} />
      <div className={user_posts.right_content}>
        <div className={user_posts.ebany}>
          <h2 className={user_posts.title_post}>{title}</h2>
        </div>
        <div className={user_posts.description}>{description}</div>
      </div>
      {store.user.login == user.login && (
        <>
          <img
            className={[user_posts.icons, user_posts.editBtn].join(" ")}
            src="src/assets/icons/editPost.svg"
          />
          <img
            className={[user_posts.icons, user_posts.deleteBtn].join(" ")}
            src="src/assets/icons/deletePost.svg"
          />
        </>
      )}
    </div>
  );
};
