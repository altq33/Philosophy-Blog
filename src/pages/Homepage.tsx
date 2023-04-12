import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import layout from "../components/Layout/layout.module.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Context } from "../main";
import { useSpring, animated } from "react-spring";
import homepage from "./homepage.module.scss";
import { useInView } from "react-intersection-observer";
export const Homepage = () => {
  const { store } = useContext(Context);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const props = useSpring({
    transform: inView ? "translateX(0%)" : "translateX(-100%)",
    transition: "opacity .5s ease-in-out",
    from: { transform: "translateX(-100%)" },
  });
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
      <Parallax pages={4} className={homepage.parallax}>
        <ParallaxLayer
          offset={0}
          speed={0}
          className={homepage.parallax__layer}
        ></ParallaxLayer>
        <animated.div style={props} ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              marginTop: "50px",
            }}
          >
            <h2 className={homepage.text2}>Philosophy <span>Blog</span></h2>
            
          </ParallaxLayer>
        </animated.div>

        <ParallaxLayer
          offset={1}
          speed={0}
          className={homepage.parallax__layer1}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.8}
          style={{
            backgroundImage: `url(src/assets/Img/1.png)`,
            backgroundSize: "",
            backgroundPosition: "13% 50%",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <div className={homepage.text}>
            <p>Добро пожаловать в наш мир Философии</p>
            <p>
              Здесь можно приятно провести время и узнать о своих философских
              предподчтениях.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          className={homepage.parallax__layer}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <div className={homepage.text}>
            <p>Вас ждет увлекательное путешествие</p>
            <p>
              На страницах данного сервиса вы сможете полностью насладиться
              всеми глубинами настоящей Философии
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.8}
          style={{
            backgroundImage: `url(src/assets/Img/11.png)`,
            backgroundSize: "",
            backgroundPosition: "13% 50%",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          className={homepage.parallax__layer1}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.8}
          style={{
            backgroundImage: `url(src/assets/Img/10.png)`,
            backgroundSize: "",
            backgroundPosition: "13% 50%",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <div className={homepage.text}>
            <p>Проведите время увлекательно</p>
            <p>Приятного путешествия и хорошей дороги, Путник!</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
