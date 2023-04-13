import React, { useState } from "react";
import { IPost, IUserPostList } from "../../types/Interfaces";
import { UserPost } from "../UserPost/UserPost";
import { SERVER_HOST } from "../../http";
import PostService from "../../services/PostService";

export const UserPostList: React.FC<IUserPostList> = ({ posts }) => {
  const [usersPost, setUsersPost] = useState(posts);

  const deletePost = (id: string) => {
    PostService.deletePost(id).then((res) => {
      setUsersPost((prev) => prev.filter((el) => el._id != id));
    });
  };

  return (
    <>
      {usersPost.map((el: IPost) => {
        return (
          <UserPost
            key={el._id}
            src={el.imgUrl && `${SERVER_HOST}/${el.imgUrl}`}
            title={el.title}
            id={el._id}
            description={el.description}
            onDelete={deletePost}
          />
        );
      })}
    </>
  );
};
