const { user } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
exports.login = async (req, res) => {
  try {
    const data = req.body;
    const { email, password } = req.body;

    // validate input
    const schema = joi.object({
      email: joi.string().email().min(8).required(),
      username: joi.string().min(6).required(),
      password: joi.string().min(6).required(),
    });

    const { error } = schema.validate(data);
    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
      });
    }
    // end validate input

    // check "email user" is exist
    const findEmail = await user.findOne({
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

    // bcrypt password
    const hashStrenght = 10;
    const hashedPassword = await bcrypt.hash(password, hashStrenght);
    // end bcrypt password

    // imput data to database
    const dataUser = await user.create({
      ...data,
      password: hashedPassword,
    });
    //  end imput data to database

    res.send({
      status: "Respon Success",
      message: "Validate input ok",
      data: {
        email: dataUser.email,
        username: dataUser.username,
        password: dataUser.password,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Register Failed!" + error,
    });
  }
};
// EndLogin

// Login
exports.loginDua = async (req, res) => {
  try {
    const dataBody = req.body;
    const { email, password } = req.body;

    const schema = joi.object({
      email: joi.string().email().min(8).required(),
      password: joi.string().min(6).required(),
    });

    const { error } = schema.validate(dataBody);

    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
      });
    }

    // check "email user" is exist
    const findEmail = await user.findOne({
      where: {
        email: email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!findEmail) {
      return res.send({
        status: "Failed",
        message: `Email or Password your entered is not found`,
      });
    }
    // end check "email user" is exist

    // check "password user" is exist
    const findPassword = await bcrypt.compare(password, findEmail.password); //--> this is check password in body is macth to password in database
    if (!findPassword) {
      return res.send({
        status: "Failed",
        // message: `Password: ${password} not found`,
        message: `Email or Password your entered is not found`,
        passwordBycript: findPassword,
      });
    }
    // end check "password user" is exist

    // make token
    // const secretKey = "jonheri";
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: findEmail.id,
      },
      secretKey
    );
    // end make token

    res.send({
      status: "Respon Success",
      message: "Login Success",
      data: {
        id: findEmail.id,
        username: findEmail.username,
        email: findEmail.email,
        password: findEmail.password,
        password: findPassword,
        secretKey,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Login Failed!" + error,
    });
  }
};
// EndLogin

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
