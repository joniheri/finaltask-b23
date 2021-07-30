const { Artist } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

// GetDatas
exports.getArtists = async (req, res) => {
  try {
    const findDatas = await Artist.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Response success",
      message: "Get Datas Successfully",
      viewDatas: findDatas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Response failed",
      message: "View data Failed! " + error,
    });
  }
};
// EndGetDatas

// AddData
exports.addArtist = async (req, res) => {
  try {
    const { body } = req;

    const response = await Artist.create(body); //-->this is code create/input data to database

    const findDatas = await Artist.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    console.log("Jumlah data pada tabel Artist: ", findDatas.count); //menghitung jumlah data di tabel

    res.send({
      status: "Response success",
      message: "Add data Successfully",
      newData: response,
      viewDatasAfterAdd: findDatas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Response failed",
      message: "Add data Failed!",
      error: error,
    });
  }
};
// EndAddData
