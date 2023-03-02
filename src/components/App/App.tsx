import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import app from "./app.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../Registration/Registration";
import { Auth } from "../Authorization/Auth";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import AuthService from "../../services/AuthService";
export const App: React.FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      store.checkAuth();
    }
  }, []);

  const getUsers = async () => {
    try {
      const res = await AuthService.getUsers();
      setUsers(res.data);
    } catch (error) {}
  };

  return (
    <BrowserRouter>
      <header className={app.header}>
        <div className={app.wrap_container}>
          <Navbar />
        </div>
      </header>
      <main className={app.main}>
        12313213
        <div className={app.wrap_container}>
          {store.isAuth ? (
            <div style={{ color: "white" }}>
              {"ЛИЧНЫЙ КАБИНЕТ " + store.user.email}
            </div>
          ) : (
            <div style={{ color: "white" }}>{"ПОКА НИЧЕ"}</div>
          )}
          {users.map((e) => (
            <div style={{ color: "white" }} key={e.email}>
              {e._id}
            </div>
          ))}
          <div></div>
          <div style={{ color: "white" }}></div>
          <button onClick={store.logout.bind(store)}>logout</button>
          <button onClick={getUsers}>получить юзеров</button>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/registr" element={<Registration />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default observer(App);
