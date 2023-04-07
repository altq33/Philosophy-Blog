import React from "react";
import error from "./error.module.scss";
import { FieldError } from "react-hook-form";

export const ErrorContainer = ({
errors,
styles,
}: {
errors?: FieldError;
styles?: React.CSSProperties;
}) => {
return (
<div
style={styles}
className={[error.error_container, errors ? error.visible : ""].join(" ")}
>
{errors && errors.message}
</div>
);
};