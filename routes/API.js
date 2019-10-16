const axios = require("axios");
const router = require("express").Router();
const cheerio = require("cheerio");

router.get("/mainsearch", (req, res) => {
  // axios.get("http://www.stackoverflow.com/").then(function(response) {
  // First, we grab the body of the html with axios
  axios.get("http://www.echojs.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    console.log(response);
    res.json(response);
  });
});

module.exports = router;
