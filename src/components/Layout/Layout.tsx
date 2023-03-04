import React from "react";
import { Navbar } from "../Navbar/Navbar";
import layout from "./layout.module.scss";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={layout.wrap}>
      <header className={layout.header}>
        <div className={layout.wrap_container}>
          <Navbar />
        </div>
      </header>
      <main className={layout.main}>
        <Outlet />
      </main>
    </div>
  );
};
