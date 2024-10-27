// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./styles/Global.css"; // Importando estilos globais
import "./styles/App.css"; // Importando estilos específicos do App
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
