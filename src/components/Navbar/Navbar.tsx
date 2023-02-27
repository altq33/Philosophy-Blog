import React from "react";
import app from "../App/app.module.scss";
import { NavbarBtn } from "./NavbarBtn";
import { NavLink } from "react-router-dom";

import navbarStyles from "./navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={navbarStyles.header_nav}>
      <nav className={navbarStyles.nav_menu}>
        <NavLink to={"/"}>
          <NavbarBtn className={app.nav_btn} text="Sign in" />
        </NavLink>
        <NavLink to={"/registr"}>
          <NavbarBtn className={`${app.nav_btn} ${app.btn_up}`} text="Sign up" />
        </NavLink>
      </nav>
    </div>
  );
};
