const multer = require("multer");

exports.UploadFiles = (imageFile, videoFile) => {
  // init milter disktorage
  // determine(menentukan) storage location files uploded
  // determine(menentukan) file name

  const fileName = "";

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads"); // storage location files upload
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
    },
  });

  // function untuk filter file berdasarkan type
  const fileFilter = function (req, file, cb) {
    if (file.filename === imageFile) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = {
          message: "Only image files are allowed!",
        };
        return cb(new Error("Only image files are allowed!"), false);
      }
    }

    if (file.filename === videoFile) {
      if (!file.originalname.match(/\.(mp4|mkv)$/)) {
        req.fileValidationError = {
          message: "Only video files are allowed!",
        };
        return cb(new Error("Only video files are allowed!"), false);
      }
    }

    cb(null, true);
  };

  const sizeInMB = 100;
  const maxSize = sizeInMB * 1000 * 100; // Maximum file size in MB

  // exekusi upload multer & menentukan disk storage, validation & maxfile size
  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxSize,
    },
  }).fields([
    {
      name: imageFile,
      maxCount: 1,
    },
    {
      name: videoFile,
      maxCount: 1,
    },
  ]); // untuk menentukan jumlah file

  return (req, res, next) => {
    upload(req, res, function (err) {
      // message error if validate failed
      if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
      }

      // message if file uploaded is empty
      if (!req.files && !err) {
        return res.status(400).send({
          message: "Please select file to upload!",
        });
      }

      if (err) {
        // jika size melebihi batas
        if (err.code === "LIMIT_FILE_SIZE") {
          return restart.status(400).send({
            message: "Max file sized 100MB",
          });
        }
        return res.status(400).send(err);
      }

      // jika semua pengecekan dan aman, maka lanjut ke controller
      // akses file yang di upload melalui req.files
      return next();
    });
  };
};
