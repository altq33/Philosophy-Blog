import React, { ChangeEvent, useState } from "react";
import app from "../App/app.module.scss";
import inputField from "../InputComp.tsx/input.module.scss";
import { Input } from "../InputComp.tsx/InputComp";
import { Btn } from "../Navbar/Btn";
import axios from "axios";
export const Registration: React.FC = () => {

  const [formValue, setformValue] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async() => {
    const loginFormData = new FormData();
    loginFormData.append("login", formValue.login)
    loginFormData.append("password", formValue.password)
  
    try {
      await axios({
        method: "post",
        url: "http://localhost:4444/auth/registration",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }
  
  return (
    <div className={app.main_row}>
      <div className={app.form_block}>
        <span>Registration Form</span>
        <form className={app.form} onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            classNameLabel={inputField.label}
            className={inputField.inputField}
            name="login"
            label="Login"
            value={formValue.login}
          />
          <Input
            onChange={handleChange}
            classNameLabel={inputField.label}
            className={inputField.inputField}
            name="password"
            label="password"
            value={formValue.password}
          />
          <Input
            classNameLabel={inputField.label}
            className={inputField.inputField}
            name="confirm"
            type="text"
            label="Confirm Password"
          />
        </form>
        <Btn
          className={`${app.nav_btn} ${app.btnUp}`}
          text="Sign up"
          type="submit"
        />
      </div>
    </div>
  );
};
