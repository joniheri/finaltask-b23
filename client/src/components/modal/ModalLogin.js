import React, { useContext, useState, useEffect } from "react";

// import component bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

// import component router-com
import { useHistory } from "react-router-dom";

import { API, setAuthToken } from "../../config/Api";
import { AppContext } from "../../context/AppContext";
import ModalAlert from "./ModalAlert";

export default function ModalLogin({
  loginShow,
  setLoginShow,
  setRegisterShow,
}) {
  const router = useHistory();
  // const [state, dispatch] = useContext(AppContext);
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageShowSuccess, setMessageShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = JSON.stringify({ ...formData });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // console.log("PrintBody: ", body);

      const respons = await API.post("/logindua", body, config); //-->this is sintact to inset to database

      // dispatch({
      //   type: "LOGIN_SUCCESS",
      //   payload: respons.data,
      // });

      if (respons.data.status === "Validate Failed") {
        setMessageShowFailed(respons.data.message);
      } else if (respons.data.status === "Failed") {
        setMessageShowFailed(respons.data.message);
      } else {
        setMessageShowFailed("");
        setFormData({
          email: "",
          password: "",
        });
        setLoginShow(false);
        setMessageShowSuccess(true);
      }

      console.log("DataLogin: ", respons);

      setAuthToken(respons.data.token);
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
          {messageShowFailed && (
            <Alert variant="danger">{messageShowFailed}</Alert>
          )}
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
            <pre style={{ color: "#fff" }}>
              {JSON.stringify(formData, null, 3)}
            </pre>
          </Form>
        </Modal.Body>
      </Modal>
      {/* EndLoginlModal============== */}

      {/* ModalAlert */}
      <ModalAlert
        messageShowSuccess={messageShowSuccess}
        setMessageShowSuccess={setMessageShowSuccess}
      />
      {/* EndModalAlert */}
    </div>
  );
}
