import React, { useEffect, useState } from "react";
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
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return showButton ? (
    <button className={ttb.upper_btn} onClick={scrollToTop}></button>
  ) : null;
};
