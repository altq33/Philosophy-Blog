import React, { MouseEvent, useContext, useState } from "react";
import passet from "./passet.module.scss";
import { useForm } from "react-hook-form";
import { IChangePasswordFormFields } from "../../types/Interfaces";
import { ProfileSettingsInput } from "../../components/UI/ProfileSettingsInput";
import { Context } from "../../main";
import { passwordValidationObject } from "../../resources/validations";
import { ErrorContainer } from "../../components/ErrorContainer/ErrorContainer";
import { SubmitError } from "../../components/SubmitError/SubmitError";
import UserService from "../../services/UserService";
import { useNavigate } from "react-router";

export const PasswordSettings = () => {
  const { store } = useContext(Context);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IChangePasswordFormFields>({ mode: "onChange" });

  const onSubmit = (data: IChangePasswordFormFields) => {
    UserService.updatePassword(
      store.user.login,
      data.newPassword,
      data.oldPassword
    )
      .then((res) => {
        navigation(`/${store.user.login}`);
      })
      .catch(() => setError("Введен неверный пароль"));
  };

  return (
    <div className={passet.wrap_container}>
      <div className={passet.settings_container}>
        {error && <SubmitError styles={{ width: "300px" }} message={error} />}
        <form
          className={passet.form_col}
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={passet.label} htmlFor="">
            Почта
            <input
              type="text"
              className={passet.input}
              readOnly
              value={store.user.email}
            />
          </label>

          <label className={passet.label} htmlFor="">
            Старый пароль
            <input
              type="text"
              className={passet.input}
              {...register("oldPassword")}
            />
          </label>
          <label className={passet.label} htmlFor="">
            Новый пароль
            <input
              type="password"
              className={passet.input}
              {...register("newPassword", passwordValidationObject)}
            />
          </label>
          <ErrorContainer
            errors={errors?.newPassword}
            styles={{ maxWidth: "300px" }}
          />
          <div className={passet.buttons_container}>
            <input
              type="submit"
              className={passet.submit}
              disabled={!isValid}
            />
            <a
              className={passet.submit}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                navigation(-1);
              }}
            >
              Назад
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
