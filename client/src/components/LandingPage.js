import React, { useState, useContext } from "react";

// import component bootstrap
import { Row, Col, Button, Image, Card } from "react-bootstrap";

// import component
import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";

// import img
import btnLogin from "../img/LoginButton.png";
import btnRegister from "../img/ButtonRegister.png";
import bgLandingPage from "../img/Rectangle1.png";
import DUMBSOUND from "../img/DUMBSOUND.png";
import LogoShapes from "../img/LogoShapes.png";

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
    <div className="landingPage" style={{ overflowX: "hidden" }}>
      <Row
        style={{
          marginTop: "30px",
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "40px",
        }}
      >
        {/* left */}
        <Col sm={6}>
          <div
            style={{
              height: "16px",
              width: "auto",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            <Image
              src={LogoShapes}
              style={{ marginRight: "8px", height: "17px" }}
            />
            <Image src={DUMBSOUND} />
          </div>
        </Col>
        {/* End left */}

        {/* Right */}
        <Col sm={6}>
          <Row
            style={{
              marginLeft: "30px",
              right: "0",
              position: "absolute",
            }}
          >
            {/* btnLogin */}
            <Image
              src={btnLogin}
              onClick={onSwitchLogin}
              style={{
                height: "30px",
                width: "auto",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />
            <ModalLogin
              loginShow={loginShow}
              setLoginShow={setLoginShow}
              setRegisterShow={setRegisterShow}
              stateLogin={stateLogin}
              setStateLogin={setStateLogin}
            />
            {/* EndBtnLogin */}

            {/* BtnRegister */}
            <Image
              src={btnRegister}
              onClick={onSwitchRegister}
              style={{
                height: "30px",
                width: "auto",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />
            <ModalRegister
              registerShow={registerShow}
              setRegisterShow={setRegisterShow}
              setLoginShow={setLoginShow}
            />
            {/* EndBntRegister */}
          </Row>
        </Col>
        {/* End Righ */}
      </Row>
    </div>
  );
}
