import React, { useContext, useState, useEffect } from "react";

// import component bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

// import component router-com
import { useHistory } from "react-router-dom";

import ModalAlert from "./ModalAlert";
import { AppContext } from "../CheckLoginTest2";
import { API, setAuthToken } from "../../../config/Api";
// import ModalAlert from "./ModalAlert";

export default function ModalLogin({
  loginShow,
  setLoginShow,
  setRegisterShow,
}) {
  const { state, dispatch } = useContext(AppContext);
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageShowSuccess, setMessageShowSuccess] = useState(false);

  // console.log(formData);

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      setData({
        ...data,
        isSubmitting: true,
        errorMessage: null,
      });

      const requestBody = {
        email: data.email,
        password: data.password,
      };

      const body = JSON.stringify({ ...requestBody });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/logindua", body, config);

      console.log("DataResponse: ", response);

      // ChekcConnection
      if (response.data.status === "Failed") {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: response.data.message,
        });
        console.log("ResponseData: ", response.data);
        console.log("DataStateUpdate: ", state);
      }
      // EndChekcConnection======

      // CheckValidationInput
      else if (response.data.status === "Validate Failed") {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: response.data.message,
        });
        console.log("ResponseData: ", response.data);
        console.log("DataStateUpdate: ", state);
      }
      // EndCheckValidationInput=======

      //CheckEmailOrPasswordNotMatch
      else if (response.data.status === "Respon failed") {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: response.data.message,
        });
        console.log("ResponseData: ", response.data);
        console.log("DataStateUpdate: ", state);
      }
      //EndCheckEmailOrPasswordNotMatch===========

      // IfLoginSuccess
      else {
        dispatch({
          type: "LOGIN",
          payload: response.data,
        });
        console.log("ResponseData: ", response.data);
        console.log("DataStateUpdate: ", state);
        console.log("state.isAuthenticated", state.isAuthenticated);
      }
      // EndIfLoginSuccess==============
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
          {data.errorMessage && (
            <Alert variant="danger">{data.errorMessage}</Alert>
          )}
          <Form onSubmit={handleFormSubmit}>
            <Form.Control
              onChange={handleInputChange}
              value={data.email}
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
              onChange={handleInputChange}
              value={data.password}
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
            {/* <pre style={{ color: "#fff" }}>{JSON.stringify(data, null, 3)}</pre> */}
          </Form>
        </Modal.Body>
      </Modal>
      {/* EndLoginlModal============== */}

      {/* ModalAlert */}
      {/* <ModalAlert
        messageShowSuccess={messageShowSuccess}
        setMessageShowSuccess={setMessageShowSuccess}
      /> */}
      {/* EndModalAlert */}
    </div>
  );
}
