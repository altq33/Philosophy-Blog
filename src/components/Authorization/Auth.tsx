import React, {useState } from "react";
import app from "../App/app.module.scss";
import inputField from "../InputComp.tsx/input.module.scss";
import { Input } from "../InputComp.tsx/InputComp";
import { Btn } from "../Navbar/Btn";
export const Auth: React.FC = () => {
  
  return (
    <div className={app.main_row}>
      <div className={app.form_block}>
        <span>Authorization</span>
        <form className={app.form}>
          <Input
            classNameLabel={inputField.label}
            className={inputField.inputField}
            name="login"
            type="text"
            label="Login"
          />
          <Input
            classNameLabel={inputField.label}
            className={inputField.inputField}
            name="pass"
            type="text"
            label="Password"
          />
        </form>
        <Btn
          className={`${app.nav_btn} ${app.btnUp}`}
          text="Sign "
        />
      </div>
    </div>
  );
};
