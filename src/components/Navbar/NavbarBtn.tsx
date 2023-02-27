import React from "react";
import { IBtn } from "../../types/Interfaces";

export const NavbarBtn: React.FC<IBtn> = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};
