import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navbar from "./navbar.module.scss";
import search_icon from "../../assets/icons/search.svg";
import { CustomLink } from "./CustomLink";
export const Navbar: React.FC = () => {
  const [navMenu, setNavMenu] = useState(false);
  const changeVisibilityBurger = () => {
    setNavMenu((prev) => !prev);
  }
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
          <CustomLink to="/"><div onClick={changeVisibilityBurger}>Главная</div></CustomLink>

          <CustomLink to="/blog"><div onClick={changeVisibilityBurger}>Блог</div></CustomLink>

          <CustomLink to="/game"><div onClick={changeVisibilityBurger}>Игра</div></CustomLink>

          <CustomLink to="/library"><div onClick={changeVisibilityBurger}>Библиотека</div></CustomLink>

          <CustomLink to="/tournament"><div onClick={changeVisibilityBurger}>Турнир</div></CustomLink>

          <CustomLink to="/gallery"><div onClick={changeVisibilityBurger}>Галерея</div></CustomLink>
        </ul>
      </nav>
      <div className={navbar.right_nav}>
        <div className={navbar.wrap_input}>
          <input
            type="text"
            name="search"
            className={navbar.input_search}
            placeholder="Поиск..."
          />
          <a href="#" className={navbar.search_btn}>
            <img src={search_icon} alt="search" />
          </a>
        </div>
        <nav className={navbar.auth_btns}>
          <Link to={"/authorization"}>Войти</Link>
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
