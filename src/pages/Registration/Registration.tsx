import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import registr from "./registr.module.scss";
import axios from "axios";
import { Context } from "../../main";

export const Registration: React.FC = () => {
  const { store } = useContext(Context);

  return (
    <>
      <form className={registr.form} action="">
        <label htmlFor="">
          <h2 className={registr.text_label}>Логин*</h2>
          <input className={registr.text_input} type="text" />
        </label>
        <label htmlFor="">
          <h2 className={registr.text_label}>Email*</h2>
          <input className={registr.text_input} type="text" />
        </label>
        <label htmlFor="">
          <h2 className={registr.text_label}>Пароль*</h2>
          <input className={registr.text_input} type="text" />
        </label>
        <label htmlFor="">
          <h2 className={registr.text_label}>Повторить пароль*</h2>
          <input className={registr.text_input} type="text" />
        </label>
        <input
          disabled
          className={registr.submit}
          type="submit"
          value="Отправить"
        />
      </form>
      <img src="/src/assets/img/form-img.png" alt="form-img" />
    </>
  );
};
