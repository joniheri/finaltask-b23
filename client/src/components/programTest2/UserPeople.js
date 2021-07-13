import React, { useState, useContext } from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

// import component bootstrap
import {
  Row,
  Col,
  Button,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

// import component
import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";

// import page
import Pay from "../pages/Pay";

// import img
import DUMBSOUND from "../img/DUMBSOUND.png";
import LogoShapes from "../img/LogoShapes.png";
import Rectangle4 from "../img/Rectangle4.png";
import Rectangle5 from "../img/Rectangle5.png";
import Rectangle6 from "../img/Rectangle6.png";
import Rectangle7 from "../img/Rectangle7.png";
import Rectangle8 from "../img/Rectangle8.png";
import Rectangle9 from "../img/Rectangle9.png";
import Rectangle10 from "../img/Rectangle10.png";
import Rectangle11 from "../img/Rectangle11.png";
import Rectangle12 from "../img/Rectangle12.png";
import Rectangle13 from "../img/Rectangle13.png";
import Rectangle14 from "../img/Rectangle14.png";
import Rectangle15 from "../img/Rectangle15.png";
import Ellipse1 from "../img/Ellipse1.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Vector3 from "../img/Vector3.png";
import VectorPay from "../img/VectorPay.png";

export default function UserPeople({ stateLogin, setStateLogin }) {
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
    <div>
      <div className="landingPage">
        <Row
          style={{
            paddingTop: "30px",
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
                marginRight: "10px",
              }}
            >
              <Image
                src={LogoShapes}
                style={{
                  marginRight: "8px",
                  height: "17px",
                  cursor: "pointer",
                }}
              />
              <Image
                src={DUMBSOUND}
                style={{
                  cursor: "pointer",
                }}
              />
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
              <div className="dropdown" style={{ float: "right" }}>
                <Image
                  src={Ellipse1}
                  style={{
                    width: "40PX",
                    height: "auto",
                    cursor: "pointer",
                    marginTop: "2px",
                  }}
                />
                <div className="dropdown-content">
                  <Link
                    to="/pay"
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
                      }}
                    >
                      <Image src={VectorPay} style={{ marginRight: "20px" }} />
                      Pay
                    </a>
                  </Link>
                  <div className="borderBottom-2"></div>
                  <a
                    href="#"
                    style={{
                      borderBottomLeftRadius: "3px",
                      borderBottomRightRadius: "3px",
                    }}
                    onClick={() => {
                      setStateLogin(false);
                    }}
                  >
                    <Image src={Vector3} style={{ marginRight: "20px" }} />
                    Logout
                  </a>
                </div>
              </div>
              {/* EndBntRegister */}
            </Row>
          </Col>
          {/* End Righ */}
          <Col sm={12}>
            <p
              style={{
                color: "#fff",
                fontSize: "40px",
                textAlign: "center",
                marginTop: "130px",
              }}
            >
              Connect on DumbSound
            </p>
            <center>
              <p
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  textAlign: "center",
                  width: "680px",
                }}
              >
                Discovery, Stream, and share a constantly expanding mix of music
                from emerging and major artists around the world
              </p>
            </center>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          style={{
            marginLeft: "60px",
            marginRight: "60px",
            marginBottom: "30px",
          }}
        >
          <Col sm={12}>
            <p
              style={{
                textAlign: "center",
                color: "#EE4622",
                fontSize: "24px",
                paddingTop: "30px",
                marginBottom: "40px",
              }}
            >
              Dengarkan Dan Rasakan
            </p>
          </Col>
          <Col sm={12}>
            <Row>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle4} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle5} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle6} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle7} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle8} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle9} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle10} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle11} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle12} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle13} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle14} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2} style={{ marginBottom: "20px" }}>
                <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                  <Card.Img variant="top" src={Rectangle15} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Post Malon</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
