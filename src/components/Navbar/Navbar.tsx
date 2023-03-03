import React from "react";
import app from "../App/app.module.scss";
import { Link } from "react-router-dom";
import navbar from "./navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={navbar.header_nav}>
      <nav className={navbar.nav_menu}>
        <Link to={"/authorization"}>
          <button className={app.nav_btn}>Sign in</button>
        </Link>
        <Link to={"/registration"}>
          <button className={`${app.nav_btn} ${app.btn_up}`}>Sign Up</button>
        </Link>
      </nav>
    </div>
  );
};
