import React, { useContext } from "react";
import solo_post from "./solo_post.module.scss";
import { ISoloPostProps } from "../../types/Interfaces";
import { SERVER_HOST } from "../../http";
import baseAvatar from "../../assets/Img/base-profile-avatar.png";
import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Like } from "../Like/Like";
import { Context } from "../../main";

export const SoloPost: React.FC<ISoloPostProps> = ({ post }) => {
  const getDate = (date: string) => {
    const parseDate = new Date(date);
    return `${parseDate.getDate()}-${
      parseDate.getMonth() + 1
    }-${parseDate.getFullYear()}`;
  };

  const { store } = useContext(Context);

  return (
    <div className={solo_post.post_container}>
      <div className={solo_post.post}>
        {post.imgUrl && (
          <img
            src={`${SERVER_HOST}/${post.imgUrl}`}
            alt="cover"
            className={solo_post.cover}
          />
        )}
        <div className={solo_post.user_info}>
          <div className={solo_post.left}>
            <Link to={`/${post.user.login}`}>
              <img
                src={
                  post.user.avatarUrl
                    ? `${SERVER_HOST}/${post.user.avatarUrl}`
                    : baseAvatar
                }
                className={solo_post.user_avatar}
                alt="avatar"
              />
            </Link>
            <div className={solo_post.title_group}>
              <Link to={`/${post.user.login}`}>
                <h2 className={solo_post.login}>{post.user.login}</h2>
              </Link>
              <h3 className={solo_post.date}>
                {"создано " + getDate(post.createdAt)}
              </h3>
            </div>
            <Like userId={store.user.userId} postId={post._id} />
          </div>
          <div className={solo_post.right}>
            <div className={solo_post.view_count}>{post.viewsCount}</div>
          </div>
        </div>
        <div className={solo_post.post_info}>
          <h2 className={solo_post.title}>{post.title}</h2>
          <p className={solo_post.description}>{post.description}</p>
          <span className={solo_post.line}></span>
          <p className={solo_post.md_text}>
            <ReactMarkdown children={post.text} />
          </p>
          <ul className={solo_post.list_tags}>
            {post.tags?.map((tag, index) => {
              return (
                <li key={index} className={solo_post.list_item}>
                  {`#${tag.split(" ").join("")}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
