import React from "react";
import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({
  children,
  to,
  style,
  closeBurger,
  ...props
}: {
  closeBurger: () => void;
  children: React.ReactNode;
  style?: object
  to: string;
}) => {
  const match = useMatch(to);

  return (
    <li onClick={closeBurger}
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
