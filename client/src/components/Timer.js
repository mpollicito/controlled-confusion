import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch({ }) {
  const {seconds, minutes} = useStopwatch({ autoStart: true });

return (
  <div>
    <div className="timer">
      <span>{minutes}</span>:<span>{ seconds < 10 ? `0${ seconds }` : seconds }</span>
    </div>
  </div>
);
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}









