const db = require("../models");
const { modelName } = require("../models/highscore");

module.exports = {
    listAll: function(req, res) {
        db.Highscore
        .find(req.body)
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).end())
    },

    create: function(req, res) {
        db.Highscore
        .create(req.body)
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Highscore
        .newList(req.body)
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).json(err));
    }

}
