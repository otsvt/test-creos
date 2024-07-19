import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./libs/i18n/i18n.ts";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
