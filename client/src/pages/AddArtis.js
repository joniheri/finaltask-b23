import React, { useState } from "react";

// import component bootstrap
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

import { API } from "../config/Api";

export default function AddArtis() {
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageNotif, setMessageNotif] = useState("");

  const [data, setData] = useState({
    name: "",
    old: "",
    type: "",
    startCareer: "",
  });

  const { name, old, type, startCareer } = data;

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ ...data });

      console.log("formDataBody: ", body);

      const response = await API.post("/addartis", body, config); //-->this is sintact to inset to database

      console.log("DataSaved: ", response);

      if (response.data.status === "Response failed") {
        setMessageShowFailed(response.data.message);
      } else if (response.data.status === "Validate Failed") {
        setMessageShowFailed(response.data.message);
      } else {
        setData({
          name: "",
          old: "",
          type: "",
          startCareer: "",
        });
        setMessageShowFailed("");
        setMessageNotif("Add Artis Success!");
      }
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };

  return (
    <Container style={{ paddingTop: "60px" }}>
      <h3 style={{ color: "#fff", marginTop: "40px", marginBottom: "40px" }}>
        Add Artis
      </h3>
      {messageShowFailed && <Alert variant="danger">{messageShowFailed}</Alert>}
      {messageNotif && <Alert variant="success">{messageNotif}</Alert>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Control
          onChange={handleInputChange}
          value={data.name}
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
          onChange={handleInputChange}
          value={data.old}
          name="old"
          type="number"
          placeholder="Old"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <Form.Control
          onChange={handleInputChange}
          value={data.type}
          name="type"
          type="text"
          placeholder="Type"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <Form.Control
          onChange={handleInputChange}
          value={data.startCareer}
          name="startCareer"
          type="number"
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
      {/* <pre style={{ color: "#fff" }}>{JSON.stringify(data, null, 3)}</pre> */}
    </Container>
  );
}
