import React, { useRef, useState } from "react";
import search from "./search.module.scss";
import search_icon from "../../assets/icons/search-svgrepo-com.svg";
export const Search: React.FC = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const input = useRef(null);
  const openSearch = () => {
    setSearchIsOpen((prev) => !prev);
    input.current.focus();
  };
  return (
    <div className={search.wrap_input}>
      <input
        ref={input}
        type="text"
        name="search"
        className={
          searchIsOpen
            ? [search.input_search, search.active_input].join(" ")
            : [search.input_search].join(" ")
        }
        placeholder="Поиск..."
      />
      <a href="#" className={search.search_btn} onClick={openSearch}>
        <img src={search_icon} alt="search" />
      </a>
    </div>
  );
};
