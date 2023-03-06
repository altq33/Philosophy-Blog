import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import auth from "./auth.module.scss";
import { Context } from "../../main";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormAuthFields } from "../../types/Interfaces";
import { ErrorContainer } from "../../components/ErrorContainer/ErrorContainer";
import AuthService from "../../services/AuthService";
import { AxiosError, AxiosResponse } from "axios";
import { SubmitError } from "../../components/SubmitError/SubmitError";
export const Authorization: React.FC = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const { store } = useContext(Context);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormAuthFields>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormAuthFields> = ({ login, password }) => {
    AuthService.login(login, password)
      .then((res) => {
        setError("");
      })
      .catch((err) => {
        setError("Ошибка авторизации, возможно не верный логин / почта или пароль");
      });
  };

  const invertPasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  return (
    <>
      <form className={auth.form} action="" onSubmit={handleSubmit(onSubmit)}>
        {error && <SubmitError message={error} />}
        <label htmlFor="">
          <h2 className={auth.text_label}>Логин* / Почта*</h2>
          <input
            className={[
              auth.text_input,
              errors?.login ? auth.error_input : "",
            ].join(" ")}
            type="text"
            {...register("login", {
              required: "Поле обязательно к заполнению",
            })}
          />
        </label>
        <ErrorContainer errors={errors?.login} />
        <label htmlFor="">
          <h2 className={auth.text_label}>Пароль*</h2>
          <input
            className={[
              auth.text_input,
              errors?.password ? auth.error_input : "",
            ].join(" ")}
            type={isVisiblePassword ? "text" : "password"}
            {...register("password", {
              required: "Поле обязательно к заполнению",
            })}
          />
          <button
            type="button"
            className={[auth.show_btn, isVisiblePassword ? "" : auth.on].join(
              " "
            )}
            onClick={invertPasswordVisibility}
          ></button>
        </label>
        <ErrorContainer errors={errors?.password} />
        
        <input
          className={auth.submit}
          type="submit"
          value="Отправить"
          disabled={!isValid}
        />
      </form>
      <img src="/src/assets/img/form-auth.png" alt="form-img" />
    </>
  );
};
