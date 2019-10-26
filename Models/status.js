var mongoose = require("mongoose");

var posts = new mongoose.Schema({
  User: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  Title: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  likes: {
    type: Number,
    unique: true,
    trim: true
  },
  tag: {
    type: String,
    trim: true
  },
  Tried: {
    type: String,
    trim: true
  },
  OS: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    trim: true
  },
  comments: {
    type: Array
  }
});
var Post = mongoose.model("post", posts);
module.exports = Post;
