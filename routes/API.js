const axios = require("axios");
const mongoose = require("mongoose");
const router = require("express").Router();
const express = require("express");
const cheerio = require("cheerio");
const User = require("../Models/User");
const tags = require("../Models/tags");
const path = require("path");
const Post = require("../Models/status");
const bcrypt = require("bcrypt");
var CircularJSON = require("circular-json");
const session = require("express-session");
const passport = require("passport");
router.get("/main", (req, res) => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=91bec895cf8d45eaa46124fb19f6ad81"
    )
    .then(function(response) {
      console.log(
        "RESPONCE BRO BRO" + JSON.stringify(response.data.articles, null, 2)
      );
      res.json(response.data);
    })
    .catch(err => console.log("err!" + err));
});
router.get("/fourms/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../Forum/forum.html"));
});
router.post("/github", (req, res) => {
  console.log("req boy" + JSON.stringify(req.body));
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCwBWJn6c4_Gpj2Xe27ZkXlw2qDB3me3H4&cx=008713660468576906214:zgncpsif0lv&q=" +
        req.body.search
    )
    .then(function(response) {
      console.log(response.data.items.pagemap);
      res.json(response.data.items);
    })
    .catch(err => console.log("err!" + err));
});
router.post("/stack", (req, res) => {
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCwBWJn6c4_Gpj2Xe27ZkXlw2qDB3me3H4&cx=008713660468576906214:cj3wfzrnrgo&q=" +
        req.body.search
    )
    .then(function(response) {
      console.log(response.data.items.pagemap);
      res.json(response.data.items);
    })
    .catch(err => console.log("err!" + err));
});

router.post("/npm", (req, res) => {
  console.log("req boy" + JSON.stringify(req.body));
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyAdkbCQOxD_APoOS8dO7Sul-DlJclsV_eY&cx=008713660468576906214:hckwxdkfyww&q=" +
        req.body.search
    )
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    })
    .catch(err => console.log("err!" + err));
});
router.post("/mainsearch", (req, res) => {
  console.log("req boy" + JSON.stringify(req.body));
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyAdkbCQOxD_APoOS8dO7Sul-DlJclsV_eY&cx=008713660468576906214:xujnt3og93n&q=" +
        req.body.search
    )
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    })
    .catch(err => console.log("err!" + err));
});
router.post("/learn", (req, res) => {
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyByPhy8gJCVCS014j6zJAEo2NuKi2vuXaA&cx=008713660468576906214:dojipqune9n&q=" +
        req.body.search
    )
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    });
});
router.post("/api", (req, res) => {
  console.log("working");
  axios
    .get(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyByPhy8gJCVCS014j6zJAEo2NuKi2vuXaA&cx=008713660468576906214:s36srsh9as6&q=" +
        req.body.search
    )
    .then(function(response) {
      console.log(response.data.items);
      res.json(response.data.items);
    });
});
router.post("/createuser", (req, res) => {
  console.log("hello");
  var userData = {
    name: req.body.name,
    picture: req.body.picture,
    email: req.body.email,
    username: req.body.username
  };
  User.register(new User(userData), req.body.password, function(err, user) {
    if (err) {
      throw err;
    }
    return res.send({ user: user });
  });
});
router.post("/login", (req, res) => {
  console.log("hit!");
  passport.authenticate("local")(req, res, function() {
    res.json(req.user);
  });
});
router.post("/addtag", (req, res) => {
  console.log(req.body);
  tags.create(req.body).then(function(tag, err) {
    if (err) throw err;
    res.send(tag);
  });
});
router.get("/tag/:tags", (req, res) => {
  var tag = req.params.tags;
  tags.find({ tag }).then(result => res.send(result));
});
router.get("/allpost", (req, res) => {
  Post.find({}).then(result => res.send(result));
});
router.get("/tagged/:tag", (req, res) => {
  var tag = req.params.tag;
  Post.find({ tag }).then(result => res.send(result));
});
router.get("/user/:user", (req, res) => {
  var User = req.params.user;
  Post.find({ User }).then(result => res.send(result));
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
