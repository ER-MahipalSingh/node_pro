const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "10AM",
    resource_type: "image",
    allowed_formats: ["jpg", "jpeg"],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
