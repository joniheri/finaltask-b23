import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Container, Navbar, Button } from "react-bootstrap";
import { AuthContext } from "../CheckLogin2";

// import css
import "../../css/Style1.css";

export default function MenuComp() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className="hovertext1"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Home
              </div>
            </Link>
            <Link
              to="/context"
              className="hovertext1"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Test Context
              </div>
            </Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <Link
                to="/"
                className="hover1"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  title: "Home",
                }}
              >
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "10px",
                  }}
                >
                  Home
                </div>
              </Link>
              <Link
                to="/context"
                className="hover1"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "10px",
                  }}
                >
                  Test Context
                </div>
              </Link>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Link
              to="/blankpage"
              className="hovertext1"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!state.isAuthenticated && (
                <div
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Notif
                </div>
              )}
            </Link>
            {state.isAuthenticated && (
              <Button
                color="default"
                onClick={() =>
                  dispatch({
                    type: "LOGOUT",
                  })
                }
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
