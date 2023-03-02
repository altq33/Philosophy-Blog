import React from "react";
import { Navbar } from "../Navbar/Navbar";
import app from "./app.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../Registration/Registration";
import { Auth } from "../Authorization/Auth";
export const App: React.FC = () => {
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
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/registr" element={<Registration />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
