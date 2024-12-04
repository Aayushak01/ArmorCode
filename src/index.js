import React from "react";
import ReactDOM from "react-dom";
import "./App.css"; // Import your styles
import App from "./App"; // Import the main app component
import "./i18n"; // Import the i18n configuration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
