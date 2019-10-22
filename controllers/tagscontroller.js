const db = require("../models");
module.export = {
  create: function(req, res) {
    db.tags
      .create(req.body)
      .then(response => res.json(response))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.tags.find({ tag: req.params }).then(response => res.json(response));
  }
};
