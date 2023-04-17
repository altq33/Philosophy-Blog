import React, { useContext } from "react";
import blog_post from "./blog_post.module.scss";
import { IBlogPost } from "../../types/Interfaces";
import { SERVER_HOST } from "../../http";
import { Link, useSearchParams } from "react-router-dom";
import baseAvatar from "../../assets/Img/base-profile-avatar.png";
import { Like } from "../Like/Like";
import { Context } from "../../main";
export const BlogPost: React.FC<IBlogPost> = ({ blogPost }) => {
  const { store } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const getDate = (date: string) => {
    const parseDate = new Date(date);
    return `${parseDate.getDate()}-${
      parseDate.getMonth() + 1
    }-${parseDate.getFullYear()}`;
  };

  return (
    <div className={blog_post.post_parent}>
      <div className={blog_post.header}>
        <div className={blog_post.left_header}>
          <Link to={`/${blogPost.user.login}`}>
            <img
              src={
                blogPost.user.avatarUrl
                  ? `${SERVER_HOST}/${blogPost.user.avatarUrl}`
                  : baseAvatar
              }
              className={blog_post.avatar}
            />
          </Link>

          <div className={blog_post.middle_header}>
            <Link to={`/${blogPost.user.login}`}>
              <h3 className={blog_post.login}>{blogPost.user.login}</h3>
            </Link>
            <h4 className={blog_post.date}>
              создано: {getDate(blogPost.createdAt)}
            </h4>
          </div>
        </div>
        <div className={blog_post.view_header}>
          <h5 className={blog_post.view_count}>{blogPost.viewsCount}</h5>
          <img
            src="src/assets/icons/views.svg"
            className={blog_post.view_icon}
          />
        </div>
      </div>
      <div className={blog_post.middle}>
        <h2 className={blog_post.title}>{blogPost.title}</h2>
        <div className={blog_post.description}>{blogPost.description}</div>
        <ul className={blog_post.list_tags}>
          {blogPost.tags?.map((tag, index) => {
            return (
              <li
                key={index}
                className={blog_post.list_item}
                onClick={() => {
                  setSearchParams({
                    tag: tag.split(" ").join("").toLowerCase(),
                  });
                }}
              >
                {`#${tag.split(" ").join("")}`}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={blog_post.last_block_img}>
        {blogPost.imgUrl && (
          <img
            src={`${SERVER_HOST}/${blogPost.imgUrl}`}
            className={blog_post.header_img}
          />
        )}
      </div>
      <div className={blog_post.btn_open_post}>
        <Like userId={store.user.userId} postId={blogPost._id} />
        <Link to={`/${blogPost.user.login}/posts/${blogPost._id}`}>Читать</Link>
      </div>
    </div>
  );
};
