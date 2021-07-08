// ipmort express
const express = require("express");
const router = express.Router();

// const { authMiddle } = require("../middleware/authMiddle");

//import testFakeData
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
// const { login, loginDua, checkAuth } = require("../controllers/auth"); //--Router auth

// router.get("/login", login);
// router.post("/logindua", loginDua);
// router.post("/check-auth", authMiddle, checkAuth);
// end auth

//import tb_test
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
// end make tb_test

//tbUser
const {
  getUsers,
  addUser,
  detailUser,
  updateUser,
  deleteUser,
  register,
} = require("../controllers/tbUser"); //--Router user

router.get("/users", getUsers);
router.get("/detailuser/:id", detailUser);
router.post("/adduser", addUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.post("/registeruser/", register);
// end tbUser

module.exports = router;
