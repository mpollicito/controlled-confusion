import React from "react";
// import { Component } from "react";
// import Card from "./Card";
// import Board from "./Board";
// import Nav from "./Nav";
import Timer from "./Timer";

function App() {
  const time = new Date();
time.setSeconds(time.getSeconds() + 600);
  return (
    <div>
      <Timer expiryTimestamp={time} />
    </div>
  );
}



export default App;
