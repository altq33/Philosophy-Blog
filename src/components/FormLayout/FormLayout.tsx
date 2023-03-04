import React from "react";
import formlayout from "./formlayout.module.scss";
import { Outlet } from "react-router-dom";
import { CustomLink } from "../Navbar/CustomLink";

export const FormLayout = () => {
  const activeStyle = {
    color: "#5957BA",
    borderBottom: "2px solid #5957BA",
    borderRadius: "13px 13px 0 0",
    paddingTop: "2px",
  };

  return (
    <div className={formlayout.wrap_container}>
      <div className={formlayout.plate}>
        <nav className={formlayout.links_container}>
          <ul>
            <CustomLink style={activeStyle} to="/users/authorization">
              Войти
            </CustomLink>
            <CustomLink style={activeStyle} to="/users/registration">
              Зарегистрироваться
            </CustomLink>
          </ul>
        </nav>
        <div className={formlayout.form_container}>
          <Outlet />
          <img src="/src/assets/img/form-img.png" alt="form-img" />
        </div>
      </div>
    </div>
  );
};
