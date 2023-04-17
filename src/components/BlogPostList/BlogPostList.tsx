import React from "react";
import { BlogPost } from "../BlogPost/BlogPost";
import { IBlogPostList } from "../../types/Interfaces";
import { useSearchParams } from "react-router-dom";

export const BlogPostList: React.FC<IBlogPostList> = ({ blogPostList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tag = searchParams.get("tag") || "";

  return (
    <>
      {blogPostList
        .filter((item) => {
          if (!tag && !item.tags) return true;
          if (!tag) return true;
          return item.tags?.some((t) => {
            return t.split(" ").join("").toLowerCase() == tag;
          });
        })
        .map((blogItem) => {
          return <BlogPost key={blogItem._id} blogPost={blogItem} />;
        })}
    </>
  );
};
