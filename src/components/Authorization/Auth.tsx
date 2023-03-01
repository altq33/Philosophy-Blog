import React, { ChangeEvent, FormEvent, useState } from "react";
import app from "../App/app.module.scss";
import axios from "axios";
export const Auth: React.FC = () => {
  const [login, setformLogin] = useState("");
  const [password, setformPass] = useState("");
  const [email, setformEmail] = useState("")
  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setformLogin(e.target.value);
  };
  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setformPass(e.target.value);
  };
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setformEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      login: login,
      password: password,
      email: email
    };
    axios
      .post("http://localhost:4444/api/authorization", userData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  return (
    <div className={app.main_row}>
      <div className={app.form_block}>
        <h1>Authorization</h1>
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
          <input className={`${app.nav_btn} ${app.btn_up}`} type="submit" value="Sign in" />
        </form>
      </div>
    </div>
  );
};
