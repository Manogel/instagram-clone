const Post = require("../Models/Post");

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);

    post.like += 1;
    await post.save();
    req.io.emit("Like", post);

    return res.json(post);
  }
};
