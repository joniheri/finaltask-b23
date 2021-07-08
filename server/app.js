const express = require("express");
const app = express();
const port = 4001;

app.use(express.json());

// import dotenv
require("dotenv").config();

// import cors
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/", (req, res) => {
  res.send(`Hello, I'm Express JS! listening on port ${port}!`);
});
app.get("/about", (req, res) => {
  res.send(`This is Abaut`);
});

// import our router1
const router1 = require("./src/routers/router1");

app.use("/api/v1/", router1);
// end router1=================

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
