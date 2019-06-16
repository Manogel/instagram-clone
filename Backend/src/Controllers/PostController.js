const Post = require("../Models/Post");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");
    return res.json(posts);
  },

  async store(req, res) {
    const { author, description, place, hashtags } = req.body;
    const { filename: image, destination } = req.file;

    const [name] = image.split(".");

    const fileName = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(destination, "resized", fileName));

    fs.unlinkSync(req.file.path);
    const post = await Post.create({
      author,
      description,
      place,
      hashtags,
      image: fileName
    });

    req.io.emit("Post", post);
    return res.json(post);
  }
};
