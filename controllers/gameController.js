const db = require("../models");

module.exports = {
    listAll: function(req, res) {
        console.log("get call")
        db.Highscore
        .find(req.body)
        .sort({ score: -1 })
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).end())
    },

    create: function(req, res) {
        console.log("create call")
        db.Highscore
        .create(req.body)
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        console.log("update call")
        db.Highscore
        .newList(req.body)
        .then(scoreList => res.json(scoreList))
        .catch(err => res.status(422).json(err));
    }

}
