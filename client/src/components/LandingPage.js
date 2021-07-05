import React, { useState, useContext } from "react";

// import component bootstrap
import { Row, Col, Button, Image, Card } from "react-bootstrap";

// import component
import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";

export default function LandingPage({ stateLogin, setStateLogin }) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };
  const onSwitchRegister = () => {
    setRegisterShow(true);
    setLoginShow(false);
  };

  // console.log("Statsu Lgon LandingPage: ", stateLogin);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Row
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        {/* left */}
        <Col sm={6}>
          <Row>
            <h1>Left Columb</h1>
          </Row>
          <Row styl>
            <Col sm={6} style={{ padding: "0" }}>
              <Button className="btn-login" onClick={onSwitchLogin}>
                Login
              </Button>
              <ModalLogin
                loginShow={loginShow}
                setLoginShow={setLoginShow}
                setRegisterShow={setRegisterShow}
                stateLogin={stateLogin}
                setStateLogin={setStateLogin}
              />
            </Col>
            <Col sm={6} style={{ padding: "0" }}>
              <Button className="btn-register" onClick={onSwitchRegister}>
                Register
              </Button>
              <ModalRegister
                registerShow={registerShow}
                setRegisterShow={setRegisterShow}
                setLoginShow={setLoginShow}
              />
            </Col>
          </Row>
        </Col>
        {/* End left */}

        {/* Right */}
        <Col sm={6}>
          <Row
            style={{
              marginLeft: "30px",
            }}
          >
            <h1>Right Columb</h1>
          </Row>
        </Col>
        {/* End Righ */}
      </Row>
    </div>
  );
}
