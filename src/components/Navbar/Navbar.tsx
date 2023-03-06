import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navbar from "./navbar.module.scss";
import { CustomLink } from "./CustomLink";
import { Search } from "../Search/Search";

export const Navbar: React.FC = () => {
  const [navMenu, setNavMenu] = useState(false);
  
  const changeVisibilityBurger = () => {
    setNavMenu((prev) => !prev);
  };
  const activeStyle = {
    color: "#8fd8ac",
    borderBottom: "3px solid #8fd8ac",
    borderRadius: "1px 1px 0px 0px",
    paddingTop: "3px",
  };
  
  
  return (
    <div className={navbar.navigation_container}>
      <nav className={navbar.nav_menu}>
        <ul
          className={
            navMenu
              ? [navbar.menu, navbar.active].join(" ")
              : [navbar.menu].join(" ")
          }
        >
          <CustomLink
            closeBurger={changeVisibilityBurger}
            style={activeStyle}
            to="/"
          >
            Главная
          </CustomLink>

          <CustomLink
            closeBurger={changeVisibilityBurger}
            style={activeStyle}
            to="/blog"
          >
            Блог
          </CustomLink>

          <CustomLink
            closeBurger={changeVisibilityBurger}
            style={activeStyle}
            to="/game"
          >
            Игра
          </CustomLink>

          <CustomLink
            closeBurger={changeVisibilityBurger}
            style={activeStyle}
            to="/library"
          >
            Библиотека
          </CustomLink>

          <CustomLink
            closeBurger={changeVisibilityBurger}
            style={activeStyle}
            to="/tournament"
          >
            Турнир
          </CustomLink>

          <CustomLink
            closeBurger={changeVisibilityBurger}
            style={activeStyle}
            to="/gallery"
          >
            Галерея
          </CustomLink>
          <CustomLink
            closeBurger={changeVisibilityBurger}
            to="/users/authorization"
          >
            Войти
          </CustomLink>
        </ul>
      </nav>
      <div className={navbar.right_nav}>
        <Search />
        <nav className={navbar.auth_btns}>
          <Link to={"/users/authorization"}>Войти</Link>
        </nav>
        <div
          onClick={() => setNavMenu(!navMenu)}
          className={
            navMenu
              ? [navbar.burger_menu, navbar.active_burger].join(" ")
              : [navbar.burger_menu].join(" ")
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
