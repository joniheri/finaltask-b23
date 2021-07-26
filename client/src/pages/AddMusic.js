import React, { useState, useEffect } from "react";

// import component bootsrtrap
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

// import config
import { API } from "../config/Api";

export default function AddMusic() {
  const [artis, setArtis] = useState([]);
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageNotif, setMessageNotif] = useState("");
  const [preview, setPreview] = useState("");

  const [data, setData] = useState({
    title: "",
    year: "",
    imageFile: "",
    attache: "",
    artistId: "",
  });

  const { title, year, imageFile, attache, artistId } = data;

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "imageFile" ? e.target.files : e.target.value,
    });

    if (e.target.name === "imageFile" && e.target.value !== "") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    } else {
      setPreview("");
    }
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
  // EndLoadDatasArtis

  // SaveDataToDatabase
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // console.log(
      //   "NameImageFile: ",
      //   "img." + data.imageFile[0].name.split(".")[1]
      // );

      const formData = new FormData();
      formData.set("title", data.title);
      formData.set("year", data.year);
      formData.set("attache", data.attache);
      formData.set("artistId", data.artistId);
      formData.set(
        "imageFile",
        data.imageFile[0],
        "img" + data.imageFile[0].name.split(".")[1]
      );

      // setData({
      //   ...data,
      //   imageFile: data.imageFile[0].name,
      // });

      console.log("setNewData", data);

      // const response = await API.post("/addmusicwithfile", formData, config); //-->this is sintact to inset to database

      // console.log("DataSaved: ", response);

      // if (response.data.status === "Response Failed") {
      //   setMessageShowFailed(response.data.message);
      // } else if (response.data.status === "Validate Failed") {
      //   setMessageShowFailed(response.data.message);
      // } else {
      //   setData({
      //     title: "",
      //     year: "",
      //     imageFile: "",
      //     attache: "",
      //     artistId: "",
      //   });
      //   setMessageShowFailed("");
      //   setMessageNotif("Add Data Success!");
      // }
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };
  // EndSaveDataToDatabase

  return (
    <Container style={{ paddingTop: "60px" }}>
      <h3 style={{ color: "#fff", marginTop: "40px", marginBottom: "40px" }}>
        Add Music
      </h3>
      {messageShowFailed && <Alert variant="danger">{messageShowFailed}</Alert>}
      {messageNotif && <Alert variant="success">{messageNotif}</Alert>}
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col sm={9}>
            <Form.Control
              onChange={handleInputChange}
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
              name="imageFile"
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
          name="year"
          type="number"
          placeholder="Year"
          required
          style={{ margin: "0 0 15px 0" }}
          className="input1"
        />
        <select
          onChange={handleInputChange}
          value={data.artistId}
          name="artistId"
          style={{
            width: "100%",
            height: "38px",
            borderRadius: "5px",
          }}
        >
          <option>--Select Singer--</option>
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
              title="Attache"
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
        <Row>
          <Col sm={9}></Col>
          <Col sm={3}>
            {preview !== "" && (
              <img
                src={preview}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginBottom: "15px",
                }}
              />
            )}
          </Col>
        </Row>
      </Form>
      <pre style={{ color: "#fff" }}>{JSON.stringify(data, null, 3)}</pre>
      <pre style={{ color: "#fff" }}>{JSON.stringify(artis, null, 3)}</pre>
    </Container>
  );
}
