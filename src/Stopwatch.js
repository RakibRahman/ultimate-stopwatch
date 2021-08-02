import React, { useState, useEffect, useRef } from "react";
const Stopwatch = (_) => {
  const [timer, setTimer] = useState(0);
  const currentTime = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      currentTime.current++;
      setTimer(currentTime.current++);
      console.log("set timer");
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const resetStopwatch = () => {
    console.log("ok");
  };
  return (
    <div>
      <h1>Ultimate Stopwatch</h1>
      <p>{timer}</p>
      <button>Start</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};
export default Stopwatch;
