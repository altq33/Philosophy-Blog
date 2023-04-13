import React, { useEffect, useState } from "react";
import blog from "./blog.module.scss";
import { BlogPost } from "../../components/BlogPost/BlogPost";
import { BlogPostList } from "../../components/BlogPostList/BlogPostList";
import { IBlogPostList, IPost } from "../../types/Interfaces";
import PostService from "../../services/PostService";
import { Loader } from "../../components/Loader/Loader";

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

  return (
    <div className={blog.wrap_container}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={blog.blog_posts}>
          <BlogPostList blogPostList={posts} />
        </div>
      )}
    </div>
  );
};
