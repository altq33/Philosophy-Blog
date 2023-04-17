import React, { useContext, useEffect, useState } from "react";
import blog from "./blog.module.scss";
import { BlogPost } from "../../components/BlogPost/BlogPost";
import { BlogPostList } from "../../components/BlogPostList/BlogPostList";
import { IBlogPostList, IPost } from "../../types/Interfaces";
import PostService from "../../services/PostService";
import { Loader } from "../../components/Loader/Loader";
import { Context } from "../../main";
import { useSearchParams } from "react-router-dom";

export const Blog: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    setIsLoading(true);
    PostService.getAllPosts().then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    });
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const tag = searchParams.get("tag") || "";

  return (
    <div className={blog.wrap_container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {tag && (
            <div className={blog.selected_tag}>
              <p>{`#${tag}`}</p>
              <button
                className={blog.delete_tag}
                type="button"
                onClick={() => {
                  searchParams.delete("tag");
                  setSearchParams();
                }}
              ></button>
            </div>
          )}
          <div className={blog.blog_posts}>
            <BlogPostList blogPostList={posts} />
          </div>
        </>
      )}
    </div>
  );
};
