const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HighscoreSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  highscore: {
    type: Number,
    required: true
  },

});

const Highscore = mongoose.model("Highscore", HighscoreSchema);

module.exports = Highscore;