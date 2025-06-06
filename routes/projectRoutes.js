const express = require("express");
const {
  create,
  get,
  singleGet,
  update,
  deleted,
} = require("../controllers/projectControllers");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "chat-app-images",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), create);
router.get("/", get);
router.get("/:id", singleGet);
router.put("/:id", upload.single("image"), update);
router.delete("/:id", deleted);

module.exports = router;
