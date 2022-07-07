import React from "react";
import ReactDOM from "react-dom/client";
import Color from "./components/functional/CounterF";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Color />
  </React.StrictMode>
);