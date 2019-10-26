require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
const apiRoutes = require("./routes/API.js");
const app = express();
const PORT = process.env.PORT || 3001;
const bcrypt = require("bcrypt");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(routes);
app.use("/", apiRoutes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
