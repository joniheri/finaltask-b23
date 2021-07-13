// ipmort express
const express = require("express");
const router = express.Router();

// const { authMiddle } = require("../middleware/authMiddle");

// testFakeData
// const {
//   getTestDatas,
//   getTestData,
//   postTestData,
//   patchTestData,
//   deleteTestData,
// } = require("../controllers/testData"); //--Router testFakeData
// router.get("/testdatas", getTestDatas);
// router.get("/testdata/:id", getTestData);
// router.post("/testdata/", postTestData);
// router.patch("/testdata/:id", patchTestData);
// router.delete("/testdata/:id", deleteTestData);
// end testFakeData

// auth
const { checkAuth, authMiddle } = require("../controllers/Auth"); //--Router auth

// router.post("/check-auth", authMiddle, checkAuth);
// end auth

//tb_test
// const {
//   tests,
//   detailTest,
//   addTest,
//   updateTest,
//   deleteTest,
// } = require("../controllers/tbTest"); //--Router test

// router.get("/tests", tests);
// router.get("/detailtest/:id", detailTest);
// router.post("/addtest", addTest);
// router.patch("/updatetest/:id", updateTest);
// router.delete("/deletetest/:id", deleteTest);
// end tb_test

//tbUser
const {
  getUsers,
  addUser,
  detailUser,
  updateUser,
  deleteUser,
  register,
  login,
  loginDua,
} = require("../controllers/tbUser"); //--Router user

router.get("/users", getUsers);
router.get("/detailuser/:id", detailUser);
router.post("/adduser", addUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.post("/registeruser/", register);
router.get("/login", login);
router.post("/logindua", loginDua);
// end tbUser

//tbArtis
const { getArtis, addArtis } = require("../controllers/TbArtis"); //--Router user

router.get("/artists", getArtis);
router.post("/addartis", addArtis);
// end tbUser

//tbMusic
const { getMusic } = require("../controllers/TbMusic"); //--Router user

router.get("/musics", getMusic);
// EndTbMusic

//tbTransaction
const { getTransaction } = require("../controllers/TbTransaction"); //--Router user

router.get("/transaction", getTransaction);
// EndTbTransaction

module.exports = router;
