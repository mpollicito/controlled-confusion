const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const highscores = require("./models/memorygame");
const Highscore = require("./models/highscore.js");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/api"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/memorygame',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.post("/submit", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// Define API routes here
app.post("/highscore", ({ body }, res) => {
  Highscore.create(body)
    .then(dbHighscore => {
      res.json(dbHighscore);
    })
    .catch(err => {
      res.json(err);
    });
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});