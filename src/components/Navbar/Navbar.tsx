import React from "react";
import app from "../App/app.module.scss";
import { Link, NavLink } from "react-router-dom";
import navbar from "./navbar.module.scss";
import search_icon from "../../assets/icons/search.svg";
import burger_icon from "../../assets/icons/free-icon-bar-7131131.png";
import { CustomLink } from "./CustomLink";
export const Navbar = () => {
  return (
    <div className={navbar.navigation_container}>
      <nav className={navbar.menu}>
        <ul>
          <CustomLink to="/">Главная</CustomLink>

          <CustomLink to="/blog">Блог</CustomLink>

          <CustomLink to="/game">Игра</CustomLink>

          <CustomLink to="/library">Библиотека</CustomLink>

          <CustomLink to="/tournament">Турнир</CustomLink>

          <CustomLink to="/gallery">Галерея</CustomLink>
        </ul>
      </nav>

      <div className={navbar.right_nav}>
        {/* ПОИСК ЗДЕСЬ ИНПУТ И ТД ИЗНАЧАЛЬНО ОНЛИ ИКОНА ПО НАЖАТИЮ ПОЯВЛЯЕТСЯ ИНПУТ*/}
        {/* Бургер думаю тут будет но хз посмотришь сам (именно иконка)*/}
        <nav className={navbar.auth_btns}>
          <Link to={"/authorization"}>Войти</Link>
          <Link to={"/registration"}>Зарегистрироваться</Link>
        </nav>
      </div>
    </div>
  );
};
