import React, { useContext, useEffect, useState } from "react";
import app from "./app.module.scss";
import { Route, Routes } from "react-router-dom";
import { Registration } from "../../pages/Registration/Registration";
import { Authorization } from "../../pages/Authorization/Authorization";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Layout } from "../Layout/Layout";
import { Homepage } from "../../pages/Homepage";
import { FormLayout } from "../FormLayout/FormLayout";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Profile } from "../../pages/Profile/Profile";
import { Users } from "../../pages/Users/Users";
import { Gallery } from "../../pages/Gallery/Gallery";
import { ProfileSettings } from "../../pages/ProfileSettings/ProfileSettings";
import { AuthRequired } from "../../hoc/AuthRequired";
import { CurrentUser } from "../../hoc/CurrentUser";
import { PasswordSettings } from "../../pages/PasswordSettings/PasswordSettings";
import { CreatePost } from "../../pages/CreatePost/CreatePost";
import { Blog } from "../../pages/Blog/Blog";

const App: React.FC = () => {
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/game" element={<Authorization />} />
        <Route path="/library" element={<Authorization />} />
        <Route path="/tournament" element={<Authorization />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/:login" element={<Profile />} />
        <Route
          path="/:login/settings"
          element={
            <AuthRequired
              description={"Для действий с аккаунтом "}
              linkPath={"/users/authorization"}
              linkTitle={"авторизуйтесь"}
            >
              <CurrentUser>
                <ProfileSettings />
              </CurrentUser>
            </AuthRequired>
          }
        />
        <Route
          path="/:login/settings/password"
          element={
            <AuthRequired
              description={"Для действий с аккаунтом "}
              linkPath={"/users/authorization"}
              linkTitle={"авторизуйтесь"}
            >
              <CurrentUser>
                <PasswordSettings />
              </CurrentUser>
            </AuthRequired>
          }
        />
        <Route
          path="/users"
          element={
            <AuthRequired
              description={"Для просмотра пользователей "}
              linkPath={"/users/authorization"}
              linkTitle={"авторизуйтесь"}
            >
              <Users />
            </AuthRequired>
          }
        />
        <Route path="/users" element={<FormLayout />}>
          <Route path="/users/authorization" element={<Authorization />} />
          <Route path="/users/registration" element={<Registration />} />
        </Route>
        <Route
          path="/:login/create-post"
          element={
            <AuthRequired
              description={"Для создания постов "}
              linkPath={"/users/authorization"}
              linkTitle={"авторизуйтесь"}
            >
              <CurrentUser>
                <CreatePost />
              </CurrentUser>
            </AuthRequired>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default observer(App);
