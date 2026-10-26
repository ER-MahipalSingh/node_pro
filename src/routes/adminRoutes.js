const express = require("express");
const { adminDashboard } = require("../controller/adminController");
const { isAuth } = require("../middleware/isAuth");
const { isAdmin } = require("../middleware/isAdmin");

const router = express.Router();

router.get("/", isAuth, isAdmin, adminDashboard);

module.exports = router;
