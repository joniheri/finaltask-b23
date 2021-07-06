import React from "react";

// import component bootsrtrap
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function AddMusic() {
  return (
    <Container>
      <h1 style={{ color: "#fff", marginTop: "40px", marginBottom: "40px" }}>
        Add Music
      </h1>
      <Form>
        <Row>
          <Col sm={9}>
            <Form.Control
              value=""
              name="title"
              type="text"
              placeholder="Title"
              required
              className="input1"
              style={{
                padding: "0",
                margin: "0 0 15px 0",
              }}
            />
          </Col>
          <Col sm={3}>
            <Form.Control
              type="file"
              title="Attach"
              style={{
                border: "1px solid #fff",
                borderRadius: "3px",
                color: "#fff",
                paddingTop: "3px",
                paddingBottom: "3px",
                cursor: "pointer",
                width: "250px",
              }}
            />
          </Col>
        </Row>
        <Form.Control
          value=""
          name="year"
          type="text"
          placeholder="Year"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <Form.Control
          value=""
          name="singer"
          type="text"
          placeholder="Singer"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <Button
          type="submit"
          className="btn-register2"
          style={{
            width: "160px",
            margin: "20px 0 0 0",
            background: "#4b4b4b",
            borderColor: "#4b4b4b",
          }}
        >
          Attache
        </Button>
        <Row>
          <Col>
            <center>
              <Button
                type="submit"
                className="btn-register2"
                style={{
                  width: "300px",
                  margin: "20px 0 0 0",
                  background: "#F58033",
                  borderColor: "#F58033",
                }}
              >
                Add Song
              </Button>
            </center>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
