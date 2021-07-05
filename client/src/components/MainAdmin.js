import React from "react";

// import component bootstrap
import { Button, Row, Col } from "react-bootstrap";

export default function MainAdmin({ stateLogin, setStateLogin }) {
  console.log("StatusLgonMainAdmin: ", stateLogin);
  return (
    <div>
      <Row
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <Col>
          <Row>
            <Col
              sm={5}
              style={{ borderRight: "1px solid #000" }}
              className="scrollY"
            >
              <h1>Left</h1>
              <Button
                onClick={() => {
                  setStateLogin(false);
                }}
                style={{ width: "100%" }}
              >
                Users
              </Button>
              <div className="distance-5"></div>
              <Button
                onClick={() => {
                  setStateLogin(false);
                }}
                style={{ width: "100%" }}
              >
                Logout
              </Button>
              <div className="distance-5"></div>
              <Button
                onClick={() => {
                  setStateLogin(false);
                }}
                style={{ width: "100%" }}
              >
                Logout
              </Button>
              <div className="distance-5"></div>
              <Button
                onClick={() => {
                  setStateLogin(false);
                }}
                style={{ width: "100%" }}
              >
                Logout
              </Button>
              <div className="borderBottom"></div>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam semper diam at erat pulvinar, at pulvinar felis
                blandit. Vestibulum volutpat tellus diam, consequat gravida
                libero rhoncus ut. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar
                felis blandit. Vestibulum volutpat tellus diam, consequat
                gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. INI ADALAH TEXT TERAKHIR
                DATI LEFT KONTEN INI. END!!!
              </p>
            </Col>
            <Col sm={7} className="scrollY">
              <h1>Right</h1>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam semper diam at erat pulvinar, at pulvinar felis
                blandit. Vestibulum volutpat tellus diam, consequat gravida
                libero rhoncus ut. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar
                felis blandit. Vestibulum volutpat tellus diam, consequat
                gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
                at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                consequat gravida libero rhoncus ut. INI ADALAH TEXT TERAKHIR
                DATI LEFT KONTEN INI. END!!!
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
