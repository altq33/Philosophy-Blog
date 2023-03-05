import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import auth from "./auth.module.scss";
import { Context } from "../../main";
export const Authorization: React.FC = () => {
  return (
    <>
    <form className={auth.form} action="">
      <label htmlFor="">
        <h2 className={auth.text_label}>Логин*</h2>
        <input className={auth.text_input} type="text" />
      </label>
      <label htmlFor="">
        <h2 className={auth.text_label}>Пароль*</h2>
        <input className={auth.text_input} type="text" />
      </label>
      <input disabled className={auth.submit} type="submit" value="Отправить"/>
    </form>
    <img src="/src/assets/img/form-auth.png" alt="form-img" />
    </>
  );
};
