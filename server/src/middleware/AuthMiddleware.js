const jwt = require("jsonwebtoken");

exports.AuthMiddleware = (req, res, next) => {
  try {
    let header = req.header("Authorization");

    if (!header) {
      return res.send({
        status: "Failed",
        message: "Access Denied",
      });
    }

    let token = header.replace("Bearer ", "");

    // const secretKey = "jonheri";
    const secretKey = process.env.SECRET_KEY;

    const verified = jwt.verify(token, secretKey);

    req.idUser = verified.id;

    next();
  } catch (error) {
    console.log(error);
    res.send({
      status: "Respon failed",
      message: "Login Failed!" + error,
    });
  }
};
