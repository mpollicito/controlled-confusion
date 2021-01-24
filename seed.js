let mongoose = require("mongoose");
let db = require("./models");

   mongoose.connect(
     process.env.MONGODB_URI || 'mongodb://localhost/memorygame',
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false
     }
   );


let highscoreSeed = [
  {
    name: "Morgan",
    highscore: 5
  },
  {
    name: "Matt",
    highscore: 10
  },
  {
    name: "Angela",
    highscore: 6
  },
  {
    name: "Susan",
    highscore: 8
  },
  {
    name: "Fred",
    highscore: 3
  },
];

db.Highscore.deleteMany({})
  .then(() => db.Highscore.collection.insertMany(highscoreSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });