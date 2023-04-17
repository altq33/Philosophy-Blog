import React from "react";
import { IGoalsListItemProps } from "../../types/Interfaces";
import list_editor from "./list_editor.module.scss";
export const QualitiesListItem: React.FC<IGoalsListItemProps> = ({
  value,
  onDelete,
}) => {
  return (
    <li className={list_editor.list_item_qual}>
      <h2 className={list_editor.value}>{value.value}</h2>
      <button
        type="button"
        className={list_editor.delete}
        onClick={() => {
          onDelete(value.id);
        }}
      ></button>
    </li>
  );
};
