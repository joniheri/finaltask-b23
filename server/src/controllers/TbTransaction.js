const { transaction } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GetDatas
exports.getTransaction = async (req, res) => {
  try {
    const findDatas = await transaction.findAll({
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
