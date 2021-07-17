import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar, Image } from "react-bootstrap";
import { AppContext } from "./CheckLoginTest2";

// import css
import "../../css/Style1.css";

// import component
import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";

// import img
import btnLogin from "../../img/LoginButton.png";
import DUMBSOUND from "../../img/DUMBSOUND.png";
import LogoShapes from "../../img/LogoShapes.png";
import btnRegister from "../../img/ButtonRegister.png";

export default function NavbarMenu({ stateLogin, setStateLogin }) {
  const { state, dispatch } = useContext(AppContext);
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
  return (
    // <h1>This is NavbarMenuPublic</h1>
    <Navbar
      className="nav-bg1"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ paddingTop: "23px" }}
    >
      <Container fluid>
        <Link
          to="/"
          className="hovertext1"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={LogoShapes}
            style={{
              height: "26px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          />
          <Image
            src={DUMBSOUND}
            style={{
              cursor: "pointer",
            }}
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
