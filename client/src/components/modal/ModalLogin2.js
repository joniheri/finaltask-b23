import React, { useHistory, useContext, useState, useEffect } from "react";

// import component bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function ModalLogin2({
  loginShow,
  setLoginShow,
  setRegisterShow,
  stateLogin,
  setStateLogin,
}) {
  const [message, setMessage] = useState("");
  const [messageShow, setMessageShow] = useState(false);

  console.log("StatusLoginModalLogin", stateLogin);

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
          <Form>
            <Form.Control
              value=""
              name="email"
              type="email"
              placeholder="Email"
              required
              style={{ margin: "0 0 15px 0" }}
              className="input1"
            />
            <Form.Control
              value=""
              name="password"
              type="password"
              placeholder="Password"
              required
              style={{ margin: "0 0 15px 0" }}
              className="input1"
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
              onClick={() => {
                setStateLogin(true);
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
