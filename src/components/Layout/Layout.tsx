import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import layout from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={layout.wrap}>
      <Header />
      <main className={layout.main}>
        {scroll > document.documentElement.clientHeight - 100 && (
          <button
            className={layout.upper_btn}
            onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}
          >
           
          </button>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
