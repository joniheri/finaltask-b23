import React from "react";

export default function NavbarAwal() {
  return (
    <div>
      <Row
        className="box-shadow-1"
        style={{
          background: "#1F1F1F",
          paddingTop: "15px",
          paddingBottom: "40px",
        }}
      >
        {/* left */}
        <Col sm={5} style={{ marginLeft: "20px", marginRight: "30px" }}>
          <div
            style={{
              height: "16px",
              width: "auto",
              marginRight: "10px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Image
                src={LogoShapes}
                style={{
                  marginLeft: "20px",
                  marginTop: "15px",
                  marginRight: "8px",
                  height: "17px",
                  cursor: "pointer",
                }}
              />
              <Image
                src={DUMBSOUND}
                style={{
                  marginTop: "15px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
        </Col>
        {/* End left */}

        {/* Right */}
        <Col sm={6}>
          <Row
            style={{
              marginLeft: "30px",
              right: "0",
              position: "absolute",
            }}
          >
            <div className="dropdown" style={{ float: "right" }}>
              <Image
                src={Ellipse2}
                onClick={onSwitchRegister}
                style={{
                  width: "40PX",
                  height: "auto",
                  cursor: "pointer",
                  marginTop: "2px",
                }}
              />
              <div className="dropdown-content">
                <Link
                  to="/transaction"
                  style={{
                    textDecoration: "none",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      borderTopLeftRadius: "3px",
                      borderTopRightRadius: "3px",
                    }}
                  >
                    <Image src={Vector1} style={{ marginRight: "20px" }} />
                    Transaction
                  </a>
                </Link>
                <Link
                  to="/addmusic"
                  style={{
                    textDecoration: "none",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      borderTopLeftRadius: "3px",
                      borderTopRightRadius: "3px",
                    }}
                  >
                    <Image src={Vector1} style={{ marginRight: "20px" }} />
                    Add Music
                  </a>
                </Link>
                <Link
                  to="/addartis"
                  style={{
                    textDecoration: "none",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <a href="#">
                    <Image src={Vector2} style={{ marginRight: "20px" }} /> Add
                    Artis
                  </a>
                </Link>
                <div className="borderBottom-2"></div>
                <a
                  href="#"
                  style={{
                    borderBottomLeftRadius: "3px",
                    borderBottomRightRadius: "3px",
                  }}
                  onClick={() => {
                    setStateLogin(false);
                  }}
                >
                  <Image src={Vector3} style={{ marginRight: "20px" }} />
                  Logout
                </a>
              </div>
            </div>
          </Row>
        </Col>
        {/* End Righ */}
      </Row>
    </div>
  );
}
