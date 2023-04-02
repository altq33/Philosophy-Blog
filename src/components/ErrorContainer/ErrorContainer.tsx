import React from "react";
import error from "./error.module.scss";
import { FieldError } from "react-hook-form";

export const ErrorContainer = ({ errors }: { errors?: FieldError }) => {
  return (
    <div
      className={[error.error_container, errors ? error.visible : ""].join(" ")}
    >
      {errors && errors.message}
    </div>
  );
};
