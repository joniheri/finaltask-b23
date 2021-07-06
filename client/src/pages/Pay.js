import React from "react";

// import component bootstrap
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function Pay() {
  return (
    <Container>
      <center>
        <h1 style={{ color: "#fff", marginTop: "40px", marginBottom: "40px" }}>
          Premium
        </h1>
      </center>
      <Form>
        <Form.Control
          value=""
          name="name"
          type="text"
          placeholder="Name"
          required
          className="input1"
          style={{
            margin: "0 0 15px 0",
          }}
        />
        <Form.Control
          value=""
          name="old"
          type="text"
          placeholder="Old"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <Form.Control
          value=""
          name="solo"
          type="text"
          placeholder="Solo"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <Form.Control
          value=""
          name="startcareer"
          type="text"
          placeholder="Start a Career"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
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
                Add Artis
              </Button>
            </center>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
