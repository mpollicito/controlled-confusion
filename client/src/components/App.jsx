import React from "react";
import { Component } from "react";
import Card from "./Card";
import Board from "./Board";
import Nav from "./Nav";
import Timer from "./Timer";
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
      <Board />
      <Score />
    </div>
  );
}

export default App;