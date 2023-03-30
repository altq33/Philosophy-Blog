import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import navbar from "./navbar.module.scss";
import { CustomLink } from "./CustomLink";
import { Search } from "../Search/Search";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { HeaderUserInfo } from "../HeaderUserInfo/HeaderUserInfo";
import avatar from "../../assets/Img/base-profile-avatar.png";

const Navbar: React.FC = () => {
  const { store } = useContext(Context);
  const [navMenu, setNavMenu] = useState(false);
  const changeVisibilityBurger = () => {
    setNavMenu((prev) => !prev);
  };

  useEffect(() => {
    if (navMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [navMenu]);

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
            closeBurger={navMenu ? changeVisibilityBurger : undefined}
            style={activeStyle}
            to="/"
          >
            Главная
          </CustomLink>

          <CustomLink
            closeBurger={navMenu ? changeVisibilityBurger : undefined}
            style={activeStyle}
            to="/blog"
          >
            Блог
          </CustomLink>

          <CustomLink
            closeBurger={navMenu ? changeVisibilityBurger : undefined}
            style={activeStyle}
            to="/game"
          >
            Игра
          </CustomLink>

          <CustomLink
            closeBurger={navMenu ? changeVisibilityBurger : undefined}
            style={activeStyle}
            to="/library"
          >
            Библиотека
          </CustomLink>

          <CustomLink
            closeBurger={navMenu ? changeVisibilityBurger : undefined}
            style={activeStyle}
            to="/tournament"
          >
            Турнир
          </CustomLink>

          <CustomLink
            closeBurger={navMenu ? changeVisibilityBurger : undefined}
            style={activeStyle}
            to="/gallery"
          >
            Галерея
          </CustomLink>

          {!store.isAuth && (
            <CustomLink
              className={navbar.auth_burg}
              closeBurger={navMenu ? changeVisibilityBurger : undefined}
              to="/users/authorization"
            >
              Войти
            </CustomLink>
          )}
        </ul>
      </nav>
      <div className={navbar.right_nav}>
        <Search />

        <nav className={navbar.auth_btns}>
          {store.isAuth ? (
            <HeaderUserInfo name={store.user.login} avatarUrl={store.user.avatarUrl ?? avatar} />
          ) : (
            <Link className={navbar.auth_btn} to={"/users/authorization"}>
              Войти
            </Link>
          )}
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

export default observer(Navbar);
