import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import Store from "./store/store";

interface IStore {
  store: Store;
}

const store = new Store();

export const Context = createContext<IStore>({
  store,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider
      value={{
        store,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
