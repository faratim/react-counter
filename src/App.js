import "./styles.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();

  function formatDate(date) {
    date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }

  function getDaysFromToday(count) {
    const today = new Date();
    today.setDate(today.getDate() + count);
    return today;
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function increaseCount() {
    setCount((s) => s + step);
  }

  function decreaseCount() {
    setCount((s) => s - step);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={decreaseCount}> - </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={increaseCount}> + </button>
      </div>

      <br />

      <div>
        {count === 0
          ? `Today is ${formatDate(today)}`
          : `${count} days from today is ${getDaysFromToday(count)}`}
        ;
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

export default App;
