import React, { MouseEvent, useContext } from "react";
import user_posts from "./user_post.module.scss";
import { IUserPost } from "../../types/Interfaces";
import { Context } from "../../main";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
export const UserPost: React.FC<IUserPost> = ({
  src,
  title,
  description,
  onDelete,
  id,
}) => {
  const { store } = useContext(Context);
  const navigation = useNavigate();
  const params = useParams();

  const onEdit = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    navigation(`/${params.login}/edit/${id}`);
  };

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    navigation(`posts/${id}`);
  };

  const handleDelete = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div className={user_posts.posts_col} onClick={onClick}>
      {src && <img src={src} className={user_posts.image} />}
      <div className={user_posts.right_content}>
        <div className={user_posts.title_post}>{title}</div>
        <div className={user_posts.description}>{description}</div>
      </div>
      {store.user.login == params.login && (
        <>
          <img
            className={[user_posts.icons, user_posts.editBtn].join(" ")}
            onClick={onEdit}
            src="src/assets/icons/editPost.svg"
          />

          <img
            className={[user_posts.icons, user_posts.deleteBtn].join(" ")}
            onClick={handleDelete}
            src="src/assets/icons/deletePost.svg"
          />
        </>
      )}
    </div>
  );
};
