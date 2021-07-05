import React from "react";

// import component bootstrap
import { Button } from "react-bootstrap";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

export default function SidebarMenu({ stateLogin, setStateLogin }) {
  console.log("StatusLoginSidebar: ", stateLogin);
  return (
    <div>
      <Link to="/">
        <Button style={{ width: "100%" }}>Home</Button>
      </Link>
      <div className="distance-5"></div>
      <Link to="/about">
        <Button style={{ width: "100%" }}>About</Button>
      </Link>
      <div className="distance-5"></div>
      <Button style={{ width: "100%" }}>Users</Button>
      <div className="distance-5"></div>
      <Button
        onClick={() => {
          setStateLogin(false);
        }}
        style={{ width: "100%" }}
      >
        Logout
      </Button>
    </div>
  );
}
