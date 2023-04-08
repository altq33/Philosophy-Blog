import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import Store from "./store/store";
import { BrowserRouter } from "react-router-dom";

interface IStore {
  store: Store;
}

export const store = new Store();

export const Context = createContext<IStore>({
  store,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider
        value={{
          store,
        }}
      >
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
