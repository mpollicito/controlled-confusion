import React from "react";
import Nav from "./Nav";
// import Gameboard from "./Gameboard";
import Timer from "./Timer";
import Card from "./Card";
import Highscores from "./Highscores";
import Score from "./Score";


function App() {
  return (
    <div>
      <Nav />
      <Timer />
      <Card />
      <Card />
      <Card />
      <br></br>
      <Highscores />
      <Score />
    </div>
  );
}

export default App;