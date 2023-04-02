import React from "react";
import { IGoalsListItemProps } from "../../types/Interfaces";
import goals_editor from "./goals_editor.module.scss";

export const GoalsListItem: React.FC<IGoalsListItemProps> = ({
  value,
  onDelete,
}) => {
  return (
    <li className={goals_editor.list_item}>
      <h2 className={goals_editor.value}>{value.value}</h2>
      <button
        type="button"
        className={goals_editor.delete}
        onClick={() => onDelete(value.id)}
      ></button>
    </li>
  );
};
