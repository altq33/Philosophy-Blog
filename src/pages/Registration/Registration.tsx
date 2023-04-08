import React, { useContext, useState } from "react";
import registr from "./registr.module.scss";
import { Context } from "../../main";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormRegFields } from "../../types/Interfaces";
import { ErrorContainer } from "../../components/ErrorContainer/ErrorContainer";
import { SubmitError } from "../../components/SubmitError/SubmitError";

import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { emailValidationObject, loginValidationObject, passwordValidationObject } from "../../resources/validations";

export const Registration: React.FC = observer(() => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const { store } = useContext(Context);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<IFormRegFields>({ mode: "onChange" });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormRegFields> = ({
    email,
    password,
    login,
  }) => {
    store
      .registration(login, email, password)
      .then((res) => {
        setError("");
        navigate("/");
      })
      .catch((err) => {
        setError("Ошибка регистрации, возможно логин или почта уже заняты");
      });
  };

  const invertPasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  return (
    <>
      <form
        className={registr.form}
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && <SubmitError message={error} />}
        <label htmlFor="">
          <h2 className={registr.text_label}>Логин*</h2>
          <input
            className={[
              registr.text_input,
              errors?.login ? registr.error_input : "",
            ].join(" ")}
            type="text"
            {...register("login", loginValidationObject)}
          />
        </label>
        <ErrorContainer errors={errors?.login} />
        <label htmlFor="">
          <h2 className={registr.text_label}>Email*</h2>
          <input
            className={[
              registr.text_input,
              errors?.email ? registr.error_input : "",
            ].join(" ")}
            type="email"
            {...register("email", emailValidationObject)}
          />
        </label>
        <ErrorContainer errors={errors?.email} />
        <label htmlFor="">
          <h2 className={registr.text_label}>Пароль*</h2>
          <input
            className={[
              registr.text_input,
              registr.pdr,
              errors?.password ? registr.error_input : "",
            ].join(" ")}
            type={isVisiblePassword ? "text" : "password"}
            {...register("password", passwordValidationObject)}
          />
          <button
            type="button"
            className={[
              registr.show_btn,
              isVisiblePassword ? "" : registr.on,
            ].join(" ")}
            onClick={invertPasswordVisibility}
          ></button>
        </label>
        <ErrorContainer errors={errors?.password} />
        <label htmlFor="">
          <h2 className={registr.text_label}>Повторить пароль*</h2>
          <input
            className={[
              registr.text_input,
              errors?.passwordRepeated ? registr.error_input : "",
            ].join(" ")}
            type="password"
            {...register("passwordRepeated", {
              required: "Поле обязательно к заполнению",
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Пароли не совпадают";
                }
              },
            })}
          />
        </label>
        <ErrorContainer errors={errors?.passwordRepeated} />
        <input
          className={registr.submit}
          type="submit"
          value="Отправить"
          disabled={!isValid}
        />
      </form>
      <img
        className={registr.img}
        src="/src/assets/img/form-img.png"
        alt="form-img"
      />
    </>
  );
});
