import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import app from "./app.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../../pages/Registration/Registration";
import { Authorization } from "../../pages/Authorization/Authorization";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import AuthService from "../../services/AuthService";
import { Layout } from "../Layout/Layout";
import { Homepage } from "../../pages/Homepage";
import { FormLayout } from "../FormLayout/FormLayout";
import { NotFound } from "../../pages/NotFound/NotFound";

export const App: React.FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      store.checkAuth();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/blog" element={<Authorization />} />
        <Route path="/game" element={<Authorization />} />
        <Route path="/library" element={<Authorization />} />
        <Route path="/tournament" element={<Authorization />} />
        <Route path="/gallery" element={<Authorization />} />
        <Route path="/users" element={<FormLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/users/authorization" element={<Authorization />} />
          <Route path="/users/registration" element={<Registration />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default observer(App);
