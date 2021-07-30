const { User } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// CheckAuth
exports.checkAuth = async (req, res) => {
  try {
    const { id } = req.body;

    // check "email user" is exist
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

// RegisterFadhil
exports.registerAuth = async (req, res) => {
  try {
    const data = req.body;

    // console.log(data);

    const schema = joi.object({
      fullname: joi.string().min(3).required(),
      email: joi.string().email().min(8).required(),
      password: joi.string().min(6).required(),
      gender: joi.string().min(4).required(),
      phone: joi.string().min(10).required(),
      address: joi.string().min(6).required(),
      level: joi.string().min(4),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
        data: data,
      });
    }

    const { fullname, email, password, gender, phone, address, level } = data;

    // check "email user" is exist
    const findEmail = await User.findOne({
      where: {
        email: email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (findEmail) {
      return res.send({
        status: "Failed",
        message: `Email: ${email} already registered`,
        dataFindEmail: findEmail,
      });
    }
    // end check "email user" is exist

    // bcryptPassword
    const hashStrenght = 10;
    const hashedPassword = await bcrypt.hash(password, hashStrenght);
    // endBcryptPassword

    // input data to database
    const dataUser = await User.create({
      ...data,
      password: hashedPassword,
    });
    //  end input data to database

    // make token
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: dataUser.id,
      },
      secretKey
    );
    // end make token

    res.send({
      status: "Response Success",
      message: "Register Success",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      status: "Respon Failed",
      message: "Register Failed",
    });
  }
};
// EndRegisterFadhil

// LoginFadhil
exports.loginAuth = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};
// EndLoginFadhil
