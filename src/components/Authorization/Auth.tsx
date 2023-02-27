import React, { ChangeEvent, FormEvent, useState } from "react";
import app from "../App/app.module.scss";
export const Auth: React.FC = () => {
  const [login, setformLogin] = useState<string>("");
  const [password, setformPass] = useState<string>("");

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setformLogin(e.target.value);
  };
  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setformPass(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:4444/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        passwor: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
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
          <input className={app.nav_btn} type="submit" value="Sign in" />
        </form>
      </div>
    </div>
  );
};
