const express = require("express");
const PostController = require("./Controllers/PostController");
const LikeController = require("./Controllers/LikeController");
const routes = new express.Router();
const multer = require("multer");
const uploadConfig = require("./Config/Upload");
const upload = multer(uploadConfig);

routes.post("/posts", upload.single("image"), PostController.store);
routes.get("/posts", PostController.index);

routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;
