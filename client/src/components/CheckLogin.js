import React from "react";

// import component bootstrap
import { Button } from "react-bootstrap";

export default function CheckLogin() {
  return (
    <div>
      <h1>This is Check Login File</h1>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>{" "}
    </div>
  );
}
