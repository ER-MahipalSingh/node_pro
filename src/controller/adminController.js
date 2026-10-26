const User = require("../models/userModel");

exports.adminDashboard = async (req, res) => {
  try {
    const totalUser = await User.countDocuments();
    return res.status(200).json({ message: "Admin dashboard", totalUser });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      message: "Admin dashboard error",
    });
  }
};
