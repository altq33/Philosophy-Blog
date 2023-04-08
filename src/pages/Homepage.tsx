import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import layout from "../components/Layout/layout.module.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Context } from "../main";
import homepage from "./homepage.module.scss";
export const Homepage = () => {
  const { store } = useContext(Context);
  return (
    <div
      className={homepage.parent}
      style={{
        top: "0",
        left: "0",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Parallax pages={3} className={homepage.parallax}>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          data-background-url="src/assets/Img/t-selin-erkan-vihkDSPuMdM-unsplash.png"
          style={{
            backgroundImage: `url(src/assets/Img/t-selin-erkan-vihkDSPuMdM-unsplash.png)`,
            backgroundSize: "contain",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            marginTop: "50px",
            textAlign: "center", // добавлено свойство для центрирования текста
          }}
        >
          <h2 className={homepage.text}>Welcome to Philosophy Blog</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.55}
          data-background-url="src/assets/Img/miti-7O_x-zaM_ug-unsplash.png"
          style={{
            backgroundImage: `url(src/assets/Img/miti-7O_x-zaM_ug-unsplash.png)`,
            backgroundSize: "contain",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          <h2 className={homepage.text}>Have Fun!</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.65}
          data-background-url="src/assets/Img/freya-ingva-FcAQd8TCBzE-unsplash.png"
          style={{
            backgroundImage: `url(src/assets/Img/freya-ingva-FcAQd8TCBzE-unsplash.png)`,
            backgroundSize: "contain",
            backgroundPosition: "-180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          <h2 className={homepage.text}>Welcome to Philosophy Blog</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
