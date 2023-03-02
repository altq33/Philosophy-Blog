import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import app from "../App/app.module.scss";
import { Context } from "../../main";
export const Auth: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPass] = useState("");

  const { store } = useContext(Context);

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.login(login, password);
  };
  return (
    <div className={app.main_row}>
      <div className={app.form_block}>
        <h1>Authorization</h1>
        <form className={app.form} onSubmit={handleSubmit}>
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
          <input
            className={`${app.nav_btn} ${app.btn_up}`}
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
    </div>
  );
};
