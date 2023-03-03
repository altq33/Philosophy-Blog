import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import auth from "./auth.module.scss";
import { Context } from "../../main";
export const Authorization: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { store } = useContext(Context);

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.login(login, password);
  };
  return (
    <div className={auth.main_row}>
      <div className={auth.form_block}>
        <h1>Authorization</h1>
        <form className={auth.form} onSubmit={handleSubmit}>
          <label className={auth.label}>
            Login
            <input
              onChange={handleChangeLogin}
              className={auth.input_field}
              name="login"
              value={login}
            />
          </label>
          <label className={auth.label}>
            Password
            <input
              onChange={handleChangePass}
              className={auth.input_field}
              name="password"
              value={password}
            />
          </label>
          <input
            className={`${auth.nav_btn} ${auth.btn_up}`}
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
    </div>
  );
};
