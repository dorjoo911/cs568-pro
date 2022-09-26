const Users = require("./userModel");

exports.getUsers = async (req, res) => {
  let users = [];
  if (req.params.id) {
    users = await Users.findById(req.params.id);
  } else {
    users = await Users.find();
  }
  res.status(200).json(users);
};

exports.save = async (req, res) => {
  const result = await new Users(req.body).save();
  res.status(201).json(result);
};

exports.updateUserById = async (req, res) => {
  const result = await Users.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.status(200).send(result);
};

exports.deleteUserById = async (req, res) => {
  res.status(200).json(await Users.findByIdAndRemove(req.params.id));
};
