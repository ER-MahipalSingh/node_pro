const express = require("express");
const {
  register,
  login,
  getUser,
  updateUser,
  forgotPassword,
  verifyOTPAndResetPassword,
  logout,
} = require("../controller/userController");
const { isAuth } = require("../middleware/isAuth");
const upload = require("../config/cloudineary");
const { validate } = require("../middleware/validate");
const { registerValidator } = require("../validator/userValidator");

const router = express.Router();

// router.post("/register", upload.single("avatar"), register);
router.post("/register", validate(registerValidator), register);
router.post("/login", login);
router.get("/me", isAuth, getUser);
router.patch("/update", isAuth, updateUser);
router.post("/send-otp", forgotPassword);
router.post("/verify-otp", verifyOTPAndResetPassword);
router.post("/logout", logout);

module.exports = router;
