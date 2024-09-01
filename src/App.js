import "./styles.css"
import React, { useState } from'react';

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
    date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    return date;
  }

  function getDaysFromToday(count) {
    const today = new Date();
    today.setDate(today.getDate() + count);
    return today;
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseStep() {
    setStep((s) => s - 1);
  }

  function increaseCount() {
    setCount((s) => s + step);
  }

  function decreaseCount() {
    setCount((s) => s - step);
  }

  return(
    <>
      <div>
        <button onClick={decreaseStep}> - </button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}> + </button>
      </div>
      
      <div>
        <button onClick={decreaseCount}> - </button>
        <span>Count: {count}</span>
        <button onClick={increaseCount}> + </button>
      </div>
      
      <br/>

      <div>
        {count === 0 ? `Today is ${formatDate(today)}` : `${count} days from today is ${getDaysFromToday(count)}`};
        
      </div>
    
    </>
  )
  
}

export default App;
