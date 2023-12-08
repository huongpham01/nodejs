const muletMiddleware = require("../middlewares/multer.middleware");
const upload = require("../controllers/upload.controller");
var router = require("express").Router();

module.exports = (app) => {
  app.use("/api/uploads", router);
  router.post(
    "/image",
    muletMiddleware.single("file"),
    upload.uploadSingleFile
  );
};