const Posts = require("./postModel");

exports.getPosts = async (req, res) => {
  let posts = [];

  if (req.params.id) {
    posts = await Posts.findById(req.params.id);
  } else {
    posts = await Posts.find();
  }
  res.status(200).json(posts);
};

exports.save = async (req, res) => {
  const result = await new Posts(req.body).save();
  res.status(201).json(result);
};

exports.updatePostById = async (req, res) => {
  const result = await Posts.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.status(200).send(result);
};

exports.deletePostById = async (req, res) => {
  res.status(200).json(await Posts.findByIdAndRemove(req.params.id));
};
