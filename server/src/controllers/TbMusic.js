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

// AddData
exports.addMusic = async (req, res) => {
  try {
    const { body } = req;

    const schema = joi.object({
      title: joi.string().min(4).required(),
      year: joi.number().integer().min(4).required(),
      thumbnail: joi.string().min(4),
      attache: joi.string().min(4),
      artistId: joi.string().required(),
    });

    const { error } = schema.validate(body);

    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
        data: body,
      });
    }

    console.log("formData: ", body);

    const addDataMusic = await Music.create(body); //-->this is code create/input data to database

    const findDatas = await Music.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "artistId"],
      },
    });

    const findDatasHasOne = await Music.findAll({
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
      message: "Add data Successfully",
      newData: body,
      viewDatasAfterAdd: findDatasHasOne,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Response Failed",
      message: "Add data Failed!",
      error: error,
    });
  }
};

exports.addMusicWithFile = async (req, res) => {
  try {
    const data = req.body;
    const thumbnail = req.files.imageFile[0].filename;

    const dataUpload = {
      ...data,
      thumbnail,
    };

    const response = await Music.create(dataUpload); // add data

    res.send({
      status: "Response Success",
      message: "Upload data success",
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "Response Failed",
      message: "Server Error",
    });
  }
};
// EndAddData
