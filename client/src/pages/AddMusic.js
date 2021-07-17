import React, { useState, useEffect } from "react";

// import component bootsrtrap
import { Container, Form, Button, Row, Col } from "react-bootstrap";

// import config
import { API } from "../config/Api";

export default function AddMusic() {
  const [artis, setArtis] = useState([]);

  const [data, setData] = useState({
    title: "",
    year: "",
    singer: "",
    thumbnail: "",
    attache: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // loadDatasArtis
  const loadArtis = async () => {
    try {
      const respons = await API.get("/artists");
      setArtis(respons.data.viewDatas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadArtis();
  }, []);
  // console.log(users);
  // EndLoadDatasArtis

  // SaveDataToDatabase
  // const { name, old, type, startCareer } = data;

  // const handleOnSubmit = async (e) => {
  //   try {
  //     e.preventDefault();

  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };

  //     const body = JSON.stringify({ ...data });

  //     const response = await API.post("/addartis", body, config); //-->this is sintact to inset to database

  //     console.log("DataSaved: ", response);

  //     if (response.data.status === "Response failed") {
  //       setMessageShowFailed(response.data.message);
  //     } else {
  //       setMessageShowFailed("");
  //       setData({
  //         name: "",
  //         old: "",
  //         type: "",
  //         startCareer: "",
  //         MessageSen: "Add Artis Success!",
  //       });
  //       setMessageNotif("Add Artis Success!");
  //     }
  //   } catch (error) {
  //     console.log("ErrorTryCath", error);
  //   }
  // };
  // EndSaveDataToDatabase
  return (
    <Container style={{ paddingTop: "60px" }}>
      <h3 style={{ color: "#fff", marginTop: "40px", marginBottom: "40px" }}>
        Add Music
      </h3>
      <Form>
        <Row>
          <Col sm={9}>
            <Form.Control
              onChange={handleInputChange}
              value={data.title}
              name="title"
              type="text"
              placeholder="Title"
              required
              className="input1"
              style={{
                padding: "0 0 0 10px",
                margin: "0 0 15px 0",
              }}
            />
          </Col>
          <Col sm={3}>
            <Form.Control
              onChange={handleInputChange}
              name="thumbnail"
              type="file"
              title="Thumbnail"
              style={{
                border: "1px solid #fff",
                borderRadius: "3px",
                color: "#fff",
                paddingTop: "3px",
                paddingBottom: "3px",
                cursor: "pointer",
                width: "250px",
              }}
            />
          </Col>
        </Row>
        <Form.Control
          onChange={handleInputChange}
          value={data.year}
          name="year"
          type="number"
          placeholder="Year"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <select
          onChange={handleInputChange}
          value={data.singer}
          name="singer"
          style={{
            width: "100%",
            height: "38px",
            borderRadius: "5px",
          }}
        >
          <option style={{}}>--Select Singer--</option>
          {artis?.map((dataArtis, index) => (
            <option value={dataArtis.id}>
              {dataArtis.id} - {dataArtis.name}
            </option>
          ))}
        </select>
        <Row
          style={{
            marginTop: "20px",
          }}
        >
          <Col sm={3}>
            <Button
              type="file"
              className="btn-register2"
              style={{
                width: "100%",
                background: "#4b4b4b",
                borderColor: "#4b4b4b",
              }}
            >
              Attache
            </Button>
          </Col>
          <Col sm={3}>
            <Form.Control
              onChange={handleInputChange}
              name="attache"
              type="file"
              title="Thumbnail"
              style={{
                border: "1px solid #fff",
                borderRadius: "3px",
                color: "#fff",
                cursor: "pointer",
                width: "100%",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <center>
              <Button
                type="submit"
                className="btn-register2"
                style={{
                  width: "300px",
                  margin: "20px 0 0 0",
                  background: "#F58033",
                  borderColor: "#F58033",
                }}
              >
                Add Song
              </Button>
            </center>
          </Col>
        </Row>
      </Form>
      <pre style={{ color: "#fff" }}>{JSON.stringify(data, null, 3)}</pre>
      <pre style={{ color: "#fff" }}>{JSON.stringify(artis, null, 3)}</pre>
    </Container>
  );
}
