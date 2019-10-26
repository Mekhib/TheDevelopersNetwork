var mongoose = require("mongoose");

var users = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  picture: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true,
    default: 100
  }
});
var User = mongoose.model("User", users);
module.exports = User;
