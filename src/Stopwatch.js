import React, { useState, useEffect } from "react";
import "./Stopwatch.css";
import Tick from "./tick.mp3";
const Stopwatch = (_) => {
  const [timer, setTimer] = useState(0);
  const [counter, setCounter] = useState(true);
  const TickTock = new Audio(Tick);
  useEffect(() => (document.title = "Ultimate Stopwatch"));
  useEffect(() => {
    let interval = null;
    if (!counter) {
      interval = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
      TickTock.play();
      TickTock.loop = true;
    }
    return () => {
      clearInterval(interval);
      TickTock.pause();
    };
  }, [counter]);

  const formattedTime = new Date(timer * 1000).toISOString().substr(11, 8);
  const toggleStopwatch = (_) => {
    setCounter((e) => !e);
    const btn = document.querySelector("#toggleBtn");
    if (btn.innerText === "Start") {
      btn.innerText = "Pause";
      btn.style.backgroundColor = "#d35400";
    } else {
      btn.innerText = "Start";
      btn.style.backgroundColor = "#2ecc71";
    }
  };
  const resetStopwatch = (_) => {
    setTimer(0);
  };
  return (
    <div className="wrapper">
      <h1 className="title">Ultimate Stopwatch</h1>
      <p className="watch">{formattedTime}</p>
      <button id="toggleBtn" onClick={toggleStopwatch}>
        Start
      </button>
      <button id="resetBtn" onClick={resetStopwatch}>
        Reset
      </button>
    </div>
  );
};
export default Stopwatch;
