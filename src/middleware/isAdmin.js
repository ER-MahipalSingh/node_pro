exports.isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(400).json({ message: "User not found" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "access denied, Admin only" });
  }
  next();
};
