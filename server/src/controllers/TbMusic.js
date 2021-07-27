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
    const pathFile = process.env.PATCH_UPLOADS;

    let findDatas = await Music.findAll({
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

    const parseJSON = JSON.parse(JSON.stringify(findDatas));

    findDatas = parseJSON.map((item) => {
      return {
        ...item,
        thumbnail: pathFile + item.thumbnail,
      };
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
      artistId: joi.string().required(),
      thumbnail: joi.string().min(4),
      attache: joi.string().min(4),
    });

    const { error } = schema.validate(body);

    if (error) {
      return res.status(400).send({
        status: "Validate Failed",
        message: error.details[0].message,
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
// EndAddData

// AddData2
exports.addMusicWithFile = async (req, res) => {
  try {
    const data = req.body;
    const thumbnail = req.files.imageFile[0].filename;

    const schema = joi.object({
      title: joi.string().min(4).required(),
      year: joi.number().integer().min(4).required(),
      artistId: joi.string().required(),
      imageFile: joi.string().min(4),
      attache: joi.string().min(4),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
      });
    }

    const dataUpload = {
      ...data,
      thumbnail,
    };

    const response = await Music.create(dataUpload); // add data

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
      status: "Response Success",
      message: "Upload data success",
      viewDatasAfterAdd: findDatasHasOne,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "Response Failed",
      message: "Server Error",
    });
  }
};
// EndAddData2

// DeleteMusic
exports.deleteMusic = async (req, res) => {
  try {
    // find data with id
    const id = req.params.id;
    const findData = await Music.findOne({
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
      where: {
        id: id,
      },
    });

    // cek data
    if (!findData) {
      return res.send({
        status: "Respon Failed",
        message: `Data with id:${id} not found`,
      });
    }

    // res.send({
    //   data: findData,
    // });

    // this is code delete data in database with id
    // const response = await Music.destroy({
    //   where: {
    //     id: id,
    //   },
    // });

    // // find all data after delete
    // const findDatas = await User.findAll({
    //   attributes: {
    //     exclude: ["createdAt", "updatedAt", "artistId"],
    //   },
    //   include: {
    //     model: Artist,
    //     as: "artist",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt", "music.artiId"],
    //     },
    //   },
    // });

    // // respon delete success
    // res.send({
    //   status: "Respon success",
    //   message: "Delete data Successfully!",
    //   viewDataWillDelete: findData,
    //   viewDataAfterUpdate: findDatas,
    // });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Delete data Failed!",
      error: error,
    });
  }
};
// EndDeleteMusic
