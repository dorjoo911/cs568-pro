const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  role: { type: String, default: "user" },
  email: String,
  password: String,
  age: Number,
});

module.exports = mongoose.model("users", userSchema);
