import React from "react";
import Nav from "./components/Nav";
import Gameboard from "./components/Gameboard";
import Highscores from "./components/Highscores";
import Score from "./components/Score";


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