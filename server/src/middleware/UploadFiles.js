const { func } = require("joi");
const multer = require("multer");

exports.UploadFiles = (imeageFile, videoFile) => {
  // init milter disktorage
  // determine(menentukan) storage location files uploded
  // determine(menentukan) file name

  const fileName = "";

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "img"); // storage location file upload
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
    },
  });

  const fileFilter = function (req, file, cb) {
    if (file.filename === imeageFile) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = {
          message: "Only image files are allowed!",
        };
        return cb(new Error("Only video files are allowed!"), false);
      }
    }
    cb(null, true);
  };

  const sizeInMB = 100;
};
