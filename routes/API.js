const axios = require("axios");
const mongoose = require("mongoose");
const router = require("express").Router();
const express = require("express");
const cheerio = require("cheerio");
const User = require("../Models/User");
const Post = require("../Models/status");
const bcrypt = require("bcrypt");
const session = require("express-session");
var app = express();
app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false
  })
);

router.get("/npm", (req, res) => {
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCwBWJn6c4_Gpj2Xe27ZkXlw2qDB3me3H4&cx=008713660468576906214:hckwxdkfyww&q=forloop"
    )
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    });
});
router.get("/learn", (req, res) => {
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCwBWJn6c4_Gpj2Xe27ZkXlw2qDB3me3H4&cx=008713660468576906214:dojipqune9n&q=forloop"
    )
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    });
});
router.get("/api", (req, res) => {
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCwBWJn6c4_Gpj2Xe27ZkXlw2qDB3me3H4&cx=008713660468576906214:s36srsh9as6&q=forloop"
    )
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    });
  router.post("/signup", (req, res) => {
    console.log("hit!");
    var userData = {
      name: req.body.state.name,
      picture: req.body.state.picture,
      email: req.body.state.email,
      username: req.body.state.username,
      password: req.body.state.password
    };
    User.pre("save", function(next) {
      var user = this;
      bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
    User.create(userData, function(err, user) {
      if (err) {
        return err;
      } else {
        return res.redirect("/");
      }
    });
  });
  router.post("/login", (req, res) => {
    User.statics.authenticate = function(email, password, callback) {
      User.findOne({ email: email }).exec(function(err, user) {
        if (err) {
          return callback(err);
        } else if (!user) {
          var errs = new Error("User not found.");
          errs.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function(err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        });
      });
    };
  });
});
router.get("/allpost", (req, res) => {
  Post.findAll({}).then(result => res.send(result));
});
router.get("/tagged/:tag", (req, res) => {
  var tag = req.params.tag;
  Post.findAll({ tag }).then(result => res.send(result));
});
router.get("/user/:user", (req, res) => {
  var User = req.params.user;
  Post.findAll({ User }).then(result => res.send(result));
});
router.put("/liked", (req, res) => {
  const filter = { id: req.body.id };
  const update = { likes: likes + 1 };
  Post.findOneAndUpdate(filter, update, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.put("/createcomment", (req, res) => {
  const filter = { id: req.body.id };
  const update = { comments: req.body };
  Post.findOneAndUpdate(filter, update, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get("/post/:id", (req, res) => {
  const id = req.params.id;
  Post.findOne({ id }).then(results => res.send(results));
});
router.put("/booleanadd", (req, res) => {
  const filter = { id: req.session.id };
  const update = { points: points + 1 };
  User.findOneAndUpdate(filter, update, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.put("/booleandelete", (req, res) => {
  const filter = { id: req.session.id };
  const update = { points: points - 1 };
  User.findOneAndUpdate(filter, update, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
module.exports = router;
