import React from "react";
import Nav from "./Nav";
import Gameboard from "./Gameboard";
import Timer from "./Timer";
import Highscores from "./Highscores";
import Score from "./Score";


function App() {
  return (
    <div>
      <Nav />
      <Gameboard />
      <br></br>
      <Highscores />
      <Score />
    </div>
  );
}

export default App;