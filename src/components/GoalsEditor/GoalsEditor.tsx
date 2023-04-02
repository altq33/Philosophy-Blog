import React, { useEffect, useState } from "react";
import goals_editor from "./goals_editor.module.scss";
import { IGoal, IGoalsEditorProps } from "../../types/Interfaces";
import { UserList } from "../UserList/UserList";
import { GoalsListItem } from "./GoalsListItem";
import { AddItemForm } from "../AddItemForm/AddItemForm";
// Я искренне прошу прощения за всё то что здесь написано
export const GoalsEditor: React.FC<IGoalsEditorProps> = ({
  onChange,
  defaultGoals,
}) => {
  const [goals, setGoals] = useState<IGoal[] | null>(() => {
    return defaultGoals
      ? defaultGoals.map<IGoal>((value, index) => ({
          id: value + Date.now() + index,
          value,
        }))
      : null;
  });

  useEffect(() => {
    onChange(goals ? goals.map((el) => el.value) : null);
  }, [goals]);

  const deleteGoal = (id: string) => {
    setGoals((prev) => {
      return prev ? prev?.filter((el) => el.id != id) : null;
    });
  };

  const addGoal = (value: string) => {
    setGoals((prev) =>
      prev
        ? [...prev, { id: value + Date.now(), value }]
        : [{ id: value + Date.now(), value }]
    );
  };

  return (
    <div className={goals_editor.container}>
      <ul className={goals_editor.list}>
        {goals?.map((el, i) => (
          <GoalsListItem
            key={el.value + Date.now() + i}
            value={el}
            onDelete={deleteGoal}
          />
        ))}
      </ul>
      <AddItemForm
        placeholder={"Введите цель"}
        addItem={addGoal}
        currentElements={goals?.length}
        validationRules={{ maxLength: 50, minLength: 10, maxElements: 3 }}
      />
    </div>
  );
};
