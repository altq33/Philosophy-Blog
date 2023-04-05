import React, { ChangeEvent, MouseEvent, useRef, useState } from "react";
import aif from "./aif.module.scss";
import { IAddItemFormProps } from "../../types/Interfaces";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { ErrorContainer } from "../ErrorContainer/ErrorContainer";

export const AddItemForm: React.FC<IAddItemFormProps> = ({
  placeholder,
  addItem,
  validationRules,
  currentElements,
}) => {
  const [value, setValue] = useState("");
  const [inputIsVisible, setInputIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputDOM = useRef<HTMLInputElement>(null);
  const inputContainerDOM = useOutsideClick(() => {
    setInputIsVisible(false);
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const showInput = () => {
    setInputIsVisible(true);
    inputDOM?.current?.focus();
  };

  const isValid: (value: string) => boolean = (value) => {
    if (currentElements == validationRules?.maxElements) {
      setErrorMessage(
        `Допустимое количество элементов: ${validationRules?.maxElements}`
      );
      return false;
    }
    if (value.length > validationRules?.maxLength!!) {
      setErrorMessage(
        `Максимальное количество символов: ${validationRules?.maxLength}`
      );
      return false;
    }
    if (value.length < validationRules?.minLength!!) {
      setErrorMessage(
        `Минимальное количество символов: ${validationRules?.minLength}`
      );
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const onAdd = () => {
    if (validationRules && !isValid(value)) return;
    addItem(value);
    setValue("");
    inputDOM?.current?.focus();
  };

  return (
    <div className={aif.container} ref={inputContainerDOM}>
      <button type="button" className={aif.button} onClick={showInput}>
        Добавить
      </button>
      {inputIsVisible && (
        <div className={aif.hidden_container}>
          <div
            className={aif.input_container}
            onKeyDown={(e) => {
              if (e.key == "Enter") onAdd();
            }}
          >
            <input
              ref={inputDOM}
              className={aif.input}
              autoFocus
              type="text"
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
            <button onClick={onAdd} className={aif.add_btn} type="button" />
          </div>
          <div className={aif.error_container}>{errorMessage}</div>
        </div>
      )}
    </div>
  );
};
