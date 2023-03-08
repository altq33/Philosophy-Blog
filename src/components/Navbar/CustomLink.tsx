import React from "react";
import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({
  children,
  to,
  style,
  className,
  closeBurger,
  ...props
}: {
  closeBurger: () => void;
  children: React.ReactNode;
  style?: object;
  className?: string;
  to: string;
}) => {
  const match = useMatch(to);

  return (
    <li style={match ? style : {}} className={className ?? ""}>
      <Link onClick={closeBurger} to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
