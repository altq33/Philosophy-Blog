import React from "react";
import avatar_block from "./avatar_block.module.scss";
import { IAvatarBlock } from "../../../types/Interfaces";
export const AvatarBlock: React.FC<IAvatarBlock> = ({
  avatar,
  userLogin,
  role,
}) => {
  return (
    <div className={avatar_block.avatar_card}>
      <img className={avatar_block.avatar} src={avatar} />
      <h2 className={avatar_block.userLogin}>{userLogin}</h2>
      <h4 className={avatar_block.role}>{role}</h4>
    </div>
  );
};
