import React from "react";
import app from "../App/app.module.scss";
import { Link, NavLink } from "react-router-dom";
import navbar from "./navbar.module.scss";
import search_icon from "../../assets/icons/search.svg";
import burger_icon from "../../assets/icons/free-icon-bar-7131131.png";
import { CustomLink } from "./CustomLink";

export const Navbar = () => {
  const activeStyle = {
    color: "#8fd8ac",
    borderBottom: "3px solid #8fd8ac",
    borderRadius: "1px 1px 0px 0px",
    paddingTop: "3px",
  };

  return (
    <div className={navbar.navigation_container}>
      <nav className={navbar.menu}>
        <ul>
          <CustomLink style={activeStyle} to="/">
            Главная
          </CustomLink>

          <CustomLink style={activeStyle} to="/blog">
            Блог
          </CustomLink>

          <CustomLink style={activeStyle} to="/game">
            Игра
          </CustomLink>

          <CustomLink style={activeStyle} to="/library">
            Библиотека
          </CustomLink>

          <CustomLink style={activeStyle} to="/tournament">
            Турнир
          </CustomLink>

          <CustomLink style={activeStyle} to="/gallery">
            Галерея
          </CustomLink>
        </ul>
      </nav>

      <div className={navbar.right_nav}>
        {/* ПОИСК ЗДЕСЬ ИНПУТ И ТД ИЗНАЧАЛЬНО ОНЛИ ИКОНА ПО НАЖАТИЮ ПОЯВЛЯЕТСЯ ИНПУТ*/}
        {/* Бургер думаю тут будет но хз посмотришь сам (именно иконка)*/}
        <nav className={navbar.auth_btns}>
          <Link to={"/users/authorization"}>Войти</Link>
          <Link to={"/users/registration"}>Зарегистрироваться</Link>
        </nav>
      </div>
    </div>
  );
};
