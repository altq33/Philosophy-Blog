import React from "react";
import { Navbar } from "../Navbar/Navbar";
import layout from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <div className={layout.wrap}>
      <Header />
      <main className={layout.main}>
        <Outlet />
      </main>
    </div>
  );
};
