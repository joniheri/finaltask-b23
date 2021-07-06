import React from "react";

import {
  Container,
  Table,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

// import img
import Polygon2 from "../img/Polygon2.png";

// import js
import jsGlobal from "../js/jsGlobal";

export default function Transaction() {
  return (
    <Container>
      <h1 style={{ color: "#fff", marginTop: "40px", marginBottom: "40px" }}>
        This is Incoming Transaction Page
      </h1>
      <Table striped bordered hover variant="dark">
        <thead style={{ color: "#EE4622" }}>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Bukti Transfer</th>
            <th>Remaining Active</th>
            <th>Status User</th>
            <th>Status Payment</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td style={{ textAlign: "center" }}>
              <Dropdown
                align="end"
                title="Dropdown right"
                id="dropdown-menu-align-right"
              >
                <Dropdown.Toggle
                  style={{ background: "#161616", borderColor: "none" }}
                >
                  <Image src={Polygon2} style={{ cursor: "pointer" }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td style={{ textAlign: "center" }}>
              <Image src={Polygon2} style={{ cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Larry the Bird</td>
            <td style={{ textAlign: "center" }}>
              <Image src={Polygon2} style={{ cursor: "pointer" }} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
