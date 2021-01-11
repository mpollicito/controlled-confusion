import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {seconds, minutes} = useTimer({ expiryTimestamp });

  return (
    <div>
      <h1>Timer { minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</h1>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120); 
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
