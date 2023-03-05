import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import search from "./search.module.scss";
import search_icon from "../../assets/icons/search-svgrepo-com.svg";
export const Search: React.FC = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputDOM = useRef<HTMLInputElement>(null);
  const inputContainerDOM = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        inputContainerDOM.current &&
        !inputContainerDOM.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputDOM]);

  const openSearch = () => {
    setSearchIsOpen(true);
    inputDOM?.current?.focus();
  };

  const closeSearch = () => {
    setSearchIsOpen(false);
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
