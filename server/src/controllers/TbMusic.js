const { Music, Artist } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GetDatas
exports.getMusics = async (req, res) => {
  try {
    const findDatas = await Music.findAll({
      attributes: {
        exclude: ["artistId", "createdAt", "updatedAt"],
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

// GetDatasHasOne
exports.getMusicHashOne = async (req, res) => {
  try {
    const findDatas = await Music.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "artistId"],
      },
      include: {
        model: Artist,
        as: "artist",
        attributes: {
          exclude: ["createdAt", "updatedAt", "music.artiId"],
        },
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
      message: "View data Failed!",
      error: error,
    });
  }
};
// EndGetDatas
