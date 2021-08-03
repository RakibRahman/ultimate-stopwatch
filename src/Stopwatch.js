import React, { useState, useEffect, useRef } from "react";
const Stopwatch = (_) => {
  const [timer, setTimer] = useState(0);
  const [counter, setCounter] = useState(false);
  const currentTime = useRef(0);
  useEffect(() => (document.title = "Ultimate Stopwatch"));
  useEffect(() => {
    let interval = null;
    if (counter) {
      interval = setInterval(() => {
        currentTime.current++;
        setTimer(currentTime.current++);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [counter]);
  const resetStopwatch = () => {
    setTimer(0);
  };
  const startStopwatch = (_) => {
    setCounter(!counter);
  };
  return (
    <div>
      <h1>Ultimate Stopwatch</h1>
      <p>{timer}</p>
      <button onClick={startStopwatch}>Start/Pause</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};
export default Stopwatch;
