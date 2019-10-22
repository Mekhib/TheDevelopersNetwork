const axios = require("axios");
const router = require("express").Router();
const cheerio = require("cheerio");

router.get("/hello", (req, res) => {
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
});

module.exports = router;
