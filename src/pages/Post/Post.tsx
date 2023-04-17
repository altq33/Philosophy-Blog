import React, { useEffect, useState } from "react";
import post from "./post.module.scss";
import { useLocation, useNavigate, useParams } from "react-router";
import { IPost } from "../../types/Interfaces";
import PostService from "../../services/PostService";
import { Loader } from "../../components/Loader/Loader";
import { NotFound } from "../NotFound/NotFound";
import ReactMarkdown from "react-markdown";
import { SoloPost } from "../../components/SoloPost/SoloPost";

export const Post = () => {
  const [postInfo, setPostInfo] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    PostService.getPostById(params.id!!)
      .then((res) => {
        setPostInfo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return !postInfo && !isLoading ? (
    <NotFound />
  ) : (
    <div className={post.wrap_container}>
      {isLoading ? <Loader /> : <SoloPost post={postInfo!!} />}
    </div>
  );
};
