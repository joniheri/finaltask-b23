import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar, Image } from "react-bootstrap";
import { AppContext } from "./CheckLoginTest2";

// import css
import "../../css/Style1.css";

// import img
import DUMBSOUND from "../../img/DUMBSOUND.png";
import LogoShapes from "../../img/LogoShapes.png";
import Ellipse2 from "../../img/Ellipse2.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";
import Vector4 from "../../img/Vector4.png";

export default function NavbarMenuAdmin({ stateLogin, setStateLogin }) {
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
    // <h1>This Is NavbarMenuAdmin</h1>
    <Navbar
      className="nav-bg1 shadow"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ paddingTop: "17px" }}
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
            {state.isAuthenticated && (
              <div className="dropdown" style={{ float: "right" }}>
                <Image
                  src={Ellipse2}
                  onClick={onSwitchRegister}
                  style={{
                    width: "40PX",
                    height: "auto",
                    cursor: "pointer",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                />
                <div className="dropdown-content">
                  <Link
                    to="/transaction"
                    style={{
                      textDecoration: "none",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        borderTopLeftRadius: "3px",
                        borderTopRightRadius: "3px",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      <Image
                        src={Vector1}
                        style={{
                          marginRight: "20px",
                          height: "20px",
                          width: "auto",
                        }}
                      />
                      Transaction
                    </a>
                  </Link>
                  <Link
                    to="/addmusic"
                    style={{
                      textDecoration: "none",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        borderTopLeftRadius: "3px",
                        borderTopRightRadius: "3px",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      <Image
                        src={Vector4}
                        style={{
                          marginRight: "22px",
                          height: "20px",
                          width: "auto",
                        }}
                      />
                      Add Music
                    </a>
                  </Link>
                  <Link
                    to="/addartis"
                    style={{
                      textDecoration: "none",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      <Image
                        src={Vector2}
                        style={{
                          marginRight: "30px",
                          height: "20px",
                          width: "auto",
                        }}
                      />
                      Add Artis
                    </a>
                  </Link>
                  <div className="borderBottom-2"></div>
                  <a
                    href="#"
                    style={{
                      borderBottomLeftRadius: "3px",
                      borderBottomRightRadius: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      dispatch({
                        type: "LOGOUT",
                      });
                    }}
                  >
                    <Image
                      src={Vector3}
                      style={{
                        marginRight: "27px",
                        height: "20px",
                        width: "auto",
                      }}
                    />
                    Logout
                  </a>
                </div>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
