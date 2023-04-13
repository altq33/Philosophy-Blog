import React from "react";
import { BlogPost } from "../BlogPost/BlogPost";
import { IBlogPostList } from "../../types/Interfaces";

export const BlogPostList: React.FC<IBlogPostList> = ({ blogPostList }) => {
  return (
    <>
      {blogPostList.map((blogItem) => {
        return <BlogPost key={blogItem._id} blogPost={blogItem} />;
      })}
    </>
  );
};
