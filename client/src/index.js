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
// import BootstrapDoc from "./components/BootstrapDoc";
// import CheckLogin from "./components/CheckLogin";
// import CheckLogin2 from "./components/CheckLogin2";
import CheckLoginTest2 from "./components/programTest2/CheckLoginTest2";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BootstrapDoc /> */}
    <CheckLoginTest2 />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
