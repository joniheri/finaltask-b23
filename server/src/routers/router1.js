// ipmort express
const express = require("express");
const router = express.Router();

// middleWareUploadFile
const { UploadFiles, UploadFile2 } = require("../middleware/UploadFiles");

// auth
// const { checkAuth, authMiddle } = require("../controllers/Auth"); //--Router auth

// router.post("/check-auth", authMiddle, checkAuth);
// end auth

//tbUser
const {
  getUsers,
  addUser,
  detailUser,
  updateUser,
  deleteUser,
  register,
  loginDua,
} = require("../controllers/tbUser"); //--Router user

router.get("/users", getUsers);
router.get("/detailuser/:id", detailUser);
router.post("/adduser", addUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.post("/registeruser/", register);
router.post("/logindua", loginDua);
// end tbUser

//tbArtis
const { getArtists, addArtist } = require("../controllers/TbArtis"); //--Router user

router.get("/artists", getArtists);
router.post("/addartis", addArtist);
// end tbUser

//tbMusic
const {
  getMusics,
  getMusicHashOne,
  addMusic,
  addMusicWithFile,
  deleteMusic,
} = require("../controllers/TbMusic"); //--Router TbMusic

router.get("/musics", getMusics);
router.get("/musicshasone", getMusicHashOne);
router.post("/addmusic", addMusic);
router.post("/addmusicwithfile", UploadFiles("imageFile"), addMusicWithFile);
router.post("/addmusic2", UploadFile2("imageFile"), addMusicWithFile);
router.delete("/deletemusic/:id", deleteMusic, addMusicWithFile);
// EndTbMusic

//tbTransaction
const { getTransaction } = require("../controllers/TbTransaction"); //--Router user

router.get("/transaction", getTransaction);
// EndTbTransaction

module.exports = router;
