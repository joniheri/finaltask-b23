import React, { useHistory, useContext, useState, useEffect } from "react";

// import component bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function ModalRegister({
  registerShow,
  setLoginShow,
  setRegisterShow,
}) {
  const [message, setMessage] = useState("");
  const [messageShow, setMessageShow] = useState(false);

  return (
    <div>
      <Modal
        size="sm"
        show={registerShow}
        onHide={() => setRegisterShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F  " }}
        centered
      >
        <Modal.Header
          className="bg-modal"
          style={{ border: "0", color: "#fff", background: "#1F1F1F" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal" style={{ background: "#1F1F1F" }}>
          {message && <Alert variant="danger">{message}</Alert>}
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
                className="input1"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
                className="input1"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                name="fullname"
                type="text"
                placeholder="Full Name"
                required
                className="input1"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                name="gender"
                type="text"
                placeholder="Gender"
                required
                className="input1"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                name="phone"
                type="text"
                placeholder="Phone"
                required
                className="input1"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                name="address"
                type="text"
                placeholder="Address"
                required
                className="input1"
              />
            </Form.Group>
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
              Register
            </Button>
            <center>
              <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
                Already have an account..? Klik{" "}
                <strong
                  style={{
                    cursor: "pointer",
                    color: "#B1B1B1",
                  }}
                  onClick={() => {
                    setLoginShow(true);
                    setRegisterShow(false);
                  }}
                >
                  Here
                </strong>
              </p>
            </center>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
