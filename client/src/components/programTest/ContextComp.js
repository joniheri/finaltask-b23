import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../CheckLogin2";

export default function ContextComp() {
  const { state, dispatch } = useContext(AuthContext);

  console.log("ResponseDataPayload: ", state);

  return (
    <Container>
      <h1 style={{ marginTop: "#fff" }}>This is ContextComponen</h1>
    </Container>
  );
}
