import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import registr from "./registr.module.scss";
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
    <div className={registr.main_row}>
      <div className={registr.form_block}>
        <h1>Registration</h1>
        <form className={registr.form} onSubmit={handleSubmit}>
          <label className={registr.label}>
            E-mail
            <input
              onChange={handleChangeEmail}
              className={registr.input_field}
              name="email"
              value={email}
            />
          </label>
          <label className={registr.label}>
            Login
            <input
              onChange={handleChangeLogin}
              className={registr.input_field}
              name="login"
              value={login}
            />
          </label>
          <label className={registr.label}>
            Password
            <input
              onChange={handleChangePass}
              className={registr.input_field}
              name="password"
              value={password}
            />
          </label>
          <label className={registr.label}>
            Confirm Password
            <input className={registr.input_field} name="confirm" />
          </label>
          <input
            className={`${registr.nav_btn} ${registr.btn_up}`}
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    </div>
  );
};
