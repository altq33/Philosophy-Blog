import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import layout from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import { ToTopButton } from '../ToTopButton/ToTopButton';

export const Layout = () => {

  return (
    <div className={layout.wrap}>
      <Header />
      <main className={layout.main}>
        <ToTopButton />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
