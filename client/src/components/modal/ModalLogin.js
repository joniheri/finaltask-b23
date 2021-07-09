import React, { useHistory, useContext, useState, useEffect } from "react";

// import component bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

import { API } from "../../config/Api";

import ModalAlert from "./ModalAlert";

export default function ModalLogin({
  loginShow,
  setLoginShow,
  setRegisterShow,
  stateLogin,
  setStateLogin,
}) {
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageShowSuccess, setMessageShowSuccess] = useState(false);

  const [formData, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ ...formData });

      console.log("PrintBody: ", body);

      const respons = await API.post("/logindua", body, config); //-->this is sintact to inset to database

      console.log("DataLogin: ", respons);
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };

  return (
    <div>
      <Modal
        size="sm"
        show={loginShow}
        onHide={() => setLoginShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F  " }}
        centered
      >
        <Modal.Header
          className="bg-modal"
          style={{ border: "0", color: "#fff", background: "#1F1F1F" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal" style={{ background: "#1F1F1F" }}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Control
              onChange={handleOnChange}
              value={email}
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input1"
              style={{
                margin: "0 0 15px 0",
                background: "#4b4b4b",
                color: "#fff",
              }}
            />
            <Form.Control
              onChange={handleOnChange}
              value={password}
              name="password"
              type="password"
              placeholder="Password"
              required
              style={{
                margin: "0 0 15px 0",
                background: "#4b4b4b",
                color: "#fff",
              }}
            />
            <Button
              type="submit"
              className="btn-register2"
              style={{
                width: "100%",
                margin: "20px 0 0 0",
                background: "#EE4622",
                borderColor: "#EE4622",
              }}
            >
              Login
            </Button>
            <center>
              <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
                Don't have an account..? Klik{" "}
                <strong
                  style={{
                    cursor: "pointer",
                    color: "#B1B1B1",
                  }}
                  onClick={() => {
                    setLoginShow(false);
                    setRegisterShow(true);
                  }}
                >
                  Here
                </strong>
              </p>
            </center>
          </Form>
        </Modal.Body>
      </Modal>
      {/* EndLoginlModal============== */}
    </div>
  );
}
