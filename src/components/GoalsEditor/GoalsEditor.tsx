import React, { useEffect, useState } from "react";
import goals_editor from "./goals_editor.module.scss";
import { IGoalsEditorProps } from "../../types/Interfaces";

export const GoalsEditor: React.FC<IGoalsEditorProps> = ({
  onChange,
  defaultGoals,
}) => {
  const [goals, setGoals] = useState(defaultGoals);

  useEffect(() => {
    onChange(goals);
  }, [goals]);

  return (
    <div
      onClick={() => {
        setGoals(["kek", "mem"]);
      }}
    >
      GoalsEditor
    </div>
  );
};
