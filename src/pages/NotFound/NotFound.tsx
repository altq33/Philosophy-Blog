import React from "react";
import not_found from "./not_found.module.scss";
import { Link } from "react-router-dom";
export const NotFound: React.FC = () => {
  return (
    <>
      <div className={not_found.column}>
        <div className={not_found.upper_content}>
          <span>4</span>
          <img src="/src/assets/GIF/black_hole.gif" alt="404..." />
          <span>4</span>
        </div>
        <div className={not_found.down_content}>
          <h2>Страница не найдена</h2>
          <p>
            О-оой! К сожалению вы перетрудились в своих познаниях настолько, что
            выпали из бытия.
          </p>
          <div className={not_found.auth_btns}>
            <Link to={"/"}>Встать на путь истинный</Link>
          </div>
        </div>
      </div>
    </>
  );
};
