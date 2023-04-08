import React, { ChangeEvent, useState } from "react";
import { IProfileSettingsInput } from "../../types/Interfaces";
import psi from "./psi.module.scss";
import { Controller } from "react-hook-form";
import Select from "react-select";

export const ProfileSettingsInput: React.FC<IProfileSettingsInput> = ({
  label,
  initValue,
  textarea,
  select,
  type,
  rows,
  cols,
  name,
  validationSchema,
  autoComplete,
  control,
  options,
  styles,
  components,
  defaultValue,
  register,
  isSearchable,
  maxLength,
  ...props
}) => {
  return (
    <label className={psi.label}>
      {label}
      {textarea ? (
        <textarea
          className={psi.text_area}
          autoComplete={autoComplete ? "on" : "off"}
          rows={rows}
          maxLength={maxLength}
          cols={cols}
          {...register(name, { value: initValue, ...validationSchema })}
          {...props}
        />
      ) : select ? (
        <Controller
          control={control}
          defaultValue={defaultValue}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Select
              isSearchable={isSearchable}
              components={components}
              styles={styles}
              options={options}
              value={options?.find((c) => c.value === value)}
              onChange={(val) => onChange(val?.value)}
            />
          )}
        />
      ) : (
        <input
          className={psi.text_input}
          type={type}
          autoComplete={autoComplete ? "on" : "off"}
          {...register(name, { value: initValue, ...validationSchema })}
          {...props}
        />
      )}
    </label>
  );
};
