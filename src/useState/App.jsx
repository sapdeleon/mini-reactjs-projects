import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  // useState Hook Practice
  const time = new Date().toLocaleTimeString();
  const [ttime, settTime] = useState(time);

  const getTime = () => {
    const newTime = new Date().toLocaleTimeString();
    settTime(newTime);
  };

  setInterval(getTime, 1000);

  return (
    <div>
      <h2>{count}</h2>
      <h1>{ttime}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
};

export default App;
