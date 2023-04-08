import React, { useEffect, useState } from "react";
import list_editor from "./list_editor.module.scss";
import { IListEditorProps, IListItem } from "../../types/Interfaces";
import { AddItemForm } from "../AddItemForm/AddItemForm";
// Я искренне прошу прощения за всё то что здесь написано
export const ListEditor: React.FC<IListEditorProps> = ({
  onChange,
  defaultItems,
  placeholder,
  validationRules,
  render,
  containerStyles,
}) => {
  const [items, setItems] = useState<IListItem[] | null>(() => {
    return defaultItems && defaultItems.length
      ? defaultItems.map<IListItem>((value, index) => ({
          id: value + Date.now() + index,
          value,
        }))
      : null;
  });

  useEffect(() => {
    onChange(items && items.length ? items.map((el) => el.value) : null);
  }, [items]);

  const deleteItem = (id: string) => {
    setItems((prev) => {
      return prev && prev.length ? prev?.filter((el) => el.id != id) : null;
    });
  };

  const addItem = (value: string) => {
    setItems((prev) =>
      prev && prev.length
        ? [...prev, { id: value + Date.now(), value }]
        : [{ id: value + Date.now(), value }]
    );
  };

  return (
    <div className={list_editor.container}>
      <ul style={containerStyles} className={list_editor.list}>
        {items && items.length ? (
          items.map((el, i) => (
            <React.Fragment key={el.value + Date.now() + i}>
              {render(el, deleteItem, i)}
            </React.Fragment>
          ))
        ) : (
          <h2 className={list_editor.no_items}>Элементов нет!</h2>
        )}
      </ul>
      <AddItemForm
        placeholder={placeholder}
        addItem={addItem}
        currentElements={items?.length}
        validationRules={validationRules}
      />
    </div>
  );
};
