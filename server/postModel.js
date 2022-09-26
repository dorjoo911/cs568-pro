const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  post: String,
});

module.exports = mongoose.model("posts", postSchema);
