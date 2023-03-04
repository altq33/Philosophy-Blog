import React from "react";
import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const match = useMatch(to);

  return (
    <li
      style={
        match
          ? {
              color: "#8fd8ac",
              borderBottom: "3px solid #8fd8ac",
              borderRadius: "1px 1px 0px 0px",
              paddingTop: "3px"
            }
          : {}
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
