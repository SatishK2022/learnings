import React from "react";
import useTimer from "../hooks/useTimer";

function Stopwatch() {
  const { seconds, isActive, start, stop, reset } = useTimer();

  return (
    <div>
      <h2 className="text-2xl font-semibold py-5">Stopwatch</h2>
      <p className="text-6xl font-extrabold">
        {seconds}
        <span className="text-lg">s</span>
      </p>
      <div className="flex items-center justify-center gap-5 py-5">
        <button
          onClick={start}
          disabled={isActive}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start
        </button>
        <button
          onClick={stop}
          disabled={!isActive}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
