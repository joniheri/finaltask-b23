import React from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

// import component bootstrap
import { Button, Row, Col } from "react-bootstrap";

// import components
import SidebarMenu from "./SidebarMenu";

// import pages
import Home from "../pages/Home";
import DescriptionProfile from "../pages/DescriptionProfile";
import About from "../pages/About";

export default function MainAdmin({ stateLogin, setStateLogin }) {
  // console.log("StatusLgonMainAdmin: ", stateLogin);
  return (
    <div>
      <Row
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Col>
          <Row>
            <Col
              sm={5}
              style={{ borderRight: "1px solid #000" }}
              className="scrollY"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1>Left</h1>
              </Link>
              <SidebarMenu
                stateLogin={stateLogin}
                setStateLogin={setStateLogin}
              />
              <Switch>
                <Route exact path="/" component={DescriptionProfile} />
                <Route exact path="/about" component={DescriptionProfile} />
                <div className="borderBottom"></div>
              </Switch>
            </Col>
            <Col sm={7} className="scrollY">
              <h1>Right</h1>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
