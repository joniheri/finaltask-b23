const { artis } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GetDatas
exports.getArtis = async (req, res) => {
  try {
    const findDatas = await artis.findAll({
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
      message: "View Test data Failed!",
    });
  }
};
// EndGetDatas

// AddData
exports.addArtis = async (req, res) => {
  try {
    const { body } = req;
    await artis.create(body); //-->this is code create/input data to database

    const findDatas = await artis.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "Response success",
      message: "Add data Successfully",
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
