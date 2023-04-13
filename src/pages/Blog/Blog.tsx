import React from "react";
import blog from "./blog.module.scss";
import { BlogPost } from "../../components/BlogPost/BlogPost";
import { BlogPostList } from "../../components/BlogPostList/BlogPostList";
import { IBlogPostList, IPost } from "../../types/Interfaces";

export const Blog: React.FC = () => {
  return (
    <div className={blog.wrap_container}>
      <div className={blog.blog_posts}>
        <BlogPostList
          blogPostList={[
            {
              _id: "6436fb4f76beffc339ed7eba",
              title: "Диман тупой анимешний редановец",
              imgUrl: ``,
              description: "13131231313",
              text: "*qweqwewwqeqweq*",
              tags: ["dsdadaasddas", "sadadasdsa", "asdadadads", "sadaSDASDASD", "SDADSADAD"],
              viewsCount: 12,
              user: {
                avatarUrl: ``,
                login: "tomasaxuuu",
              },
              createdAt: "2023-04-12T18:41:19.442Z",
            },
          ]}
        />
      </div>
    </div>
  );
};
