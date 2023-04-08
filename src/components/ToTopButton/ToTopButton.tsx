import React, { useCallback, useEffect, useState } from "react";
import ttb from "./ttb.module.scss";

export const ToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return showButton ? (
    <button className={ttb.upper_btn} onClick={scrollToTop}></button>
  ) : null;
};
