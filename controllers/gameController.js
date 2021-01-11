const db = require("../models");

module.exports = {
    listAll: function(req, res) {
        db.User
        .find(req.body)
        .sort({ score: -1 })
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).end())
    },

    create: function(req, res) {
        db.User
        .create(req.body)
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.User
        .newList(req.body)
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).json(err));
    }

}
