import React, { ChangeEvent, useRef, useState } from "react";
import search from "./search.module.scss";
import search_icon from "../../assets/icons/search-svgrepo-com.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const Search: React.FC = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputDOM = useRef<HTMLInputElement>(null);
  const inputContainerDOM = useOutsideClick(() => {
    setSearchIsOpen(false);
  });

  const openSearch = () => {
    setSearchIsOpen(true);
    inputDOM?.current?.focus();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div ref={inputContainerDOM} className={search.wrap_input}>
      <input
        ref={inputDOM}
        type="text"
        name="search"
        value={inputValue}
        onChange={onChangeHandler}
        className={
          searchIsOpen
            ? [search.input_search, search.active_input].join(" ")
            : [search.input_search].join(" ")
        }
        placeholder="Поиск..."
      />
      <button className={search.search_btn} onClick={openSearch}>
        <img src={search_icon} alt="search" />
      </button>
    </div>
  );
};
