import React from "react";
import not_found from "./not_found.module.scss";
import { Link } from "react-router-dom";
export const NotFound: React.FC = () => {
  return (
    <>
      <div className={not_found.column}>
        <div className={not_found.upper_content}>
          <h1>4</h1>
          <img src="/src/assets/GIF/black_hole.gif" alt="404..." />
          <h1>4</h1>
        </div>
        <div className={not_found.down_content}>
          <h1>Страница не найдена</h1>
          <span>
            О-оой! К сожалению вы перетрудились в своих познаниях настолько, что
            выпали из бытия.
          </span>
          <div className={not_found.auth_btns}>
            <Link to={"/"}>Встать на путь истинный</Link>
          </div>
        </div>
      </div>
    </>
  );
};
