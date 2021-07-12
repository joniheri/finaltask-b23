import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

// import css
import "./css/index.css";
import "./css/Global.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import component
import BootstrapDoc from "./components/BootstrapDoc";
import CheckLogin from "./components/CheckLogin";
import CheckLogin2 from "./components/CheckLogin2";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BootstrapDoc /> */}
    <CheckLogin2 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
