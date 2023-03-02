import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import app from "../App/app.module.scss";
import axios from "axios";
import { Context } from "../../main";

export const Registration: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { store } = useContext(Context);

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.registration(login, email, password);
  };

  return (
    <div className={app.main_row}>
      <div className={app.form_block}>
        <h1>Registration</h1>
        <form className={app.form} onSubmit={handleSubmit}>
          <label className={app.label}>
            E-mail
            <input
              onChange={handleChangeEmail}
              className={app.input_field}
              name="email"
              value={email}
            />
          </label>
          <label className={app.label}>
            Login
            <input
              onChange={handleChangeLogin}
              className={app.input_field}
              name="login"
              value={login}
            />
          </label>
          <label className={app.label}>
            Password
            <input
              onChange={handleChangePass}
              className={app.input_field}
              name="password"
              value={password}
            />
          </label>
          <label className={app.label}>
            Confirm Password
            <input className={app.input_field} name="confirm" />
          </label>
          <input
            className={`${app.nav_btn} ${app.btn_up}`}
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    </div>
  );
};
