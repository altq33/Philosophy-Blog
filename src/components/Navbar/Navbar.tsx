import React from "react";
import app from "../App/app.module.scss";
import { NavLink } from "react-router-dom";
import navbar from "./navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={navbar.header_nav}>
      <nav className={navbar.nav_menu}>
        <NavLink to={"/"}>
          <button className={app.nav_btn}>Sign in</button>
        </NavLink>
        <NavLink to={"/registr"}>
          <button className={`${app.nav_btn} ${app.btn_up}`}>Sign Up</button>
        </NavLink>
      </nav>
    </div>
  );
};
