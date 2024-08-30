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
  const [count, setCount] = useState(1);
  
  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseStep() {
    setStep((s) => s - 1);
  }

  function increaseCount() {
    setCount((s) => s + 1);
  }

  function decreaseCount() {
    setCount((s) => s - 1);
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
        
        {`Today is`} days from today is {'Wed Jul 21 2024'}
      </div>
    
    </>
  )
  
}

export default App;
