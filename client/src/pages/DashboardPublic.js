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

export default function DashboardPublic({ stateLogin, setStateLogin }) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [music, setMusic] = useState([]);

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };

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
  console.log("DataMusic:", music);
  // EndLoadDatasMusic

  console.log("PatchAPI: ", API);

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
                      <Card.Img variant="top" src={dataMusic.thumbnail} />
                      <Card.Body>
                        <Card.Title>{dataMusic.title}</Card.Title>
                        <Card.Text>{dataMusic.artist.name}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
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
