import React, { useState } from "react";

// import bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function ModalAlert({
  messageShowSuccess,
  setMessageShowSuccess,
}) {
  return (
    <div>
      <Modal
        size="sm"
        show={messageShowSuccess}
        onHide={() => setMessageShowSuccess(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F" }}
        centered
        style={{ color: "#155724" }}
      >
        <Modal.Body>
          <h3 align="center">Register Success</h3>
        </Modal.Body>
      </Modal>
    </div>
  );
}
