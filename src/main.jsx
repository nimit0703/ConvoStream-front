import ReactDOM from "react-dom";
import React from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import {store} from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
