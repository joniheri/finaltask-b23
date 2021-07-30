import React, { useState, useEffect } from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import config
import { API } from "../config/Api";

// import img
// import Rectangle4 from "../img/Rectangle4.png";

export default function Dashboard() {
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

  return (
    <div>
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
                  <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                    <Card.Img variant="top" src={dataMusic.thumbnail} />
                    <Card.Body>
                      <Card.Title>{dataMusic.title}</Card.Title>
                      <Card.Text>{dataMusic.artist.name}</Card.Text>
                      <a>
                        <Button variant="danger">Delete</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      {/* End Content */}
    </div>
  );
}
