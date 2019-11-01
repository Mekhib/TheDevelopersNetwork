require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

mongoose.Promise = global.Promise;
const LocalStrategy = require("passport-local").Strategy;
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/API.js");
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());
var User = require("./Models/User");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");
app.use("/", apiRoutes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
