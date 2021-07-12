import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

import { AuthContext } from "../CheckLogin2";
import { API, setAuthToken } from "../../config/Api";
import ModalAlert from "../modal/ModalAlert";

export default function LoginComp() {
  const { state, dispatch } = useContext(AuthContext);
  const [messageShowSuccess, setMessageShowSuccess] = useState(false);

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
    <Container>
      <h1 className="mb-3" style={{ color: "#fff" }}>
        Form Login
      </h1>
      <Form onSubmit={handleFormSubmit}>
        {data.errorMessage && (
          <Alert variant="danger" className="mt-3">
            {data.errorMessage}
          </Alert>
        )}
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
            >
              Here
            </strong>
          </p>
        </center>
        <Button
          className="mb-3"
          onClick={() => {
            setMessageShowSuccess(true);
          }}
        >
          Modal Success
        </Button>
        <pre style={{ color: "#fff" }}>{JSON.stringify(data, null, 3)}</pre>
      </Form>
      <ModalAlert
        messageShowSuccess={messageShowSuccess}
        setMessageShowSuccess={setMessageShowSuccess}
      />
    </Container>
  );
}
