import React, { useEffect, useState } from "react";
import picture from "./picture.module.scss";
import { SERVER_HOST } from "../../http";
import { IPicture } from "../../types/Interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
export const Picture: React.FC<IPicture> = ({ url }) => {
  const [isHovering, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event: any) => {
    if (event.target.classList.contains(picture.modal)) {
      handleClose();
    }
  };

  const handleDownload = () => {
    fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "image/jpeg",
      },
    })
      .then((res) => res.blob())
      .then((data) => {
        let url = URL.createObjectURL(data);
        let anchor = document.createElement("a");
        anchor.href = url;
        anchor.download =  `${url}`;
        document.body.append(anchor);
        anchor.click();
        anchor.remove();
      });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "12px";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0";
      document.body.style.height = "";
    }
  }, [isOpen]);

  return (
    <div
      className={picture.picture_block}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LazyLoadImage
        className={
          isHovering
            ? [picture.img_gallery, picture.hover].join(" ")
            : picture.img_gallery
        }
        src={url}
        effect="blur"
        alt={url}
        placeholderSrc={url}
        onClick={handleOpen}
      />
      {isHovering && (
        <svg
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className={picture.download}
          onClick={handleDownload}
        >
          <g>
            <path d="m222.641 369.63c8.906 8.922 20.752 13.836 33.358 13.836 12.587 0 24.423-4.901 33.33-13.805l90.888-90.888c18.375-18.377 18.375-48.278-.002-66.657-8.902-8.901-20.738-13.804-33.328-13.804-12.589 0-24.425 4.902-33.328 13.805l-10.426 10.427-.001-175.411c0-25.989-21.144-47.133-47.132-47.133-25.99 0-47.135 21.144-47.135 47.133v175.406l-10.423-10.422c-8.903-8.903-20.741-13.807-33.332-13.807-12.589 0-24.424 4.902-33.326 13.804-18.377 18.377-18.377 48.279 0 66.658z" />
            <path d="m464.867 321.332c-25.99 0-47.134 21.145-47.134 47.134v49.267h-323.466v-49.267c0-25.989-21.144-47.134-47.133-47.134-25.99 0-47.134 21.145-47.134 47.134v96.4c0 25.989 21.144 47.134 47.134 47.134h417.733c25.989 0 47.133-21.145 47.133-47.134v-96.4c0-25.989-21.144-47.134-47.133-47.134z" />
          </g>
        </svg>
      )}
      {isOpen && (
        <div className={picture.modal} onClick={handleModalClick}>
          <div className={picture.modal_content}>
            <LazyLoadImage
              src={url}
              effect="blur"
              alt={url}
              placeholderSrc={url}
              className={picture.modal_img}
              style={{ cursor: "default" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
