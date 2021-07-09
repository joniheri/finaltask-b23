const { user } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// CheckAuth
exports.checkAuth = async (req, res) => {
  try {
    const { id } = req.body;

    const dataUser = await user.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "failed",
      });
    }

    res.send({
      status: "success",
      data: {
        user: {
          username: dataUser.username,
          email: dataUser.email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};
// EndCheckAuth
