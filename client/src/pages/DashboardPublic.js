import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import config
import { API } from "../config/Api";

import { Row, Col, Card, Container } from "react-bootstrap";

// import component
import ModalLogin from "../components/programTest2/modal/ModalLogin";
import ModalRegister from "../components/programTest2/modal/ModalRegister";

// import img
// import Rectangle4 from "../img/Rectangle4.png";
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

export default function DashboardPublic({ stateLogin, setStateLogin }) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const [music, setMusic] = useState([]);

  // loadDatasMusic
  const loadMusic = async () => {
    try {
      const response = await API.get("/musicshasone");
      setMusic(response.data.viewDatas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadMusic();
  }, []);
  // console.log(music);
  // EndLoadDatasMusic

  // const directoryImg = "../img";

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };
  const onSwitchRegister = () => {
    setRegisterShow(true);
    setLoginShow(false);
  };

  return (
    <Container fluid>
      {/* Content */}
      <Row
        className="landingPage"
        style={{
          paddingTop: "30px",
          marginBottom: "20px",
        }}
      >
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
              {music?.map((dataMusic, index) => (
                <Col sm={2} style={{ marginBottom: "20px" }}>
                  <Link
                    onClick={onSwitchLogin}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                      <Card.Img
                        variant="top"
                        src={require("../img/Rectangle6.png").default}
                      />
                      <Card.Body>
                        <Card.Title>{"../img/" + dataMusic.title}</Card.Title>
                        <Card.Text>{dataMusic.thumbnail}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
              {/* <Col sm={2} style={{ marginBottom: "20px" }}>
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
                  <Card.Img
                    variant="top"
                    src={require("../img/Rectangle6.png").default}
                  />
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
              </Col> */}
            </Row>
          </Col>
        </Row>

        <ModalLogin
          loginShow={loginShow}
          setLoginShow={setLoginShow}
          setRegisterShow={setRegisterShow}
          stateLogin={stateLogin}
          setStateLogin={setStateLogin}
        />
        <ModalRegister
          registerShow={registerShow}
          setRegisterShow={setRegisterShow}
          setLoginShow={setLoginShow}
        />
      </div>
      {/* End Content */}
    </Container>
  );
}
