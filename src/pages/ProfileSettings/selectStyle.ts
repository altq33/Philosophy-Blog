import { CSSObjectWithLabel, GroupBase, OptionProps } from "react-select";

export const selectStyle = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    width: "300px",
    background: "rgba(41, 57, 200, 0.642);",
    border: "none",
    boxShadow: "none",
    height: "40px",
  }),

  singleValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "white",
  }),

  dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "white",
    ":hover": { color: "white" },
  }),
  menu: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    width: "300px",
    background: "rgb(114,125,218)",
  }),
  option: (baseStyles: CSSObjectWithLabel, state: any) => ({
    ...baseStyles,
    color: "white",
    cursor: "pointer",
    backgroundColor: state.isFocused ? "rgb(102,114,208)" : "rgb(114,125,218)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "white",
  }),
  noOptionsMessage: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "white",
  }),
};
