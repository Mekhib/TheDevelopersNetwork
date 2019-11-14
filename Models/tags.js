var mongoose = require("mongoose");
var tags = new mongoose.Schema({
  website: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  img: {
    type: String,
    unique: false,
    required: false,
    trim: true
  },
  title: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  tag: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  likes: {
    type: Number,
    unique: false,
    required: false,
    trim: true
  }
});
var tags = mongoose.model("Tag", tags);
module.exports = tags;
