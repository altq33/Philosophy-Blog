import React from "react";
import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({
  children,
  to,
  style,
  ...props
}: {
  children: React.ReactNode;
  style: object
  to: string;
}) => {
  const match = useMatch(to);

  return (
    <li
      style={
        match
          ? style
          : {}
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
