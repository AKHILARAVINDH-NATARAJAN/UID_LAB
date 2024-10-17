import React, { useState } from 'react';
import './App.css';
const Counter = () => {
  // Initialize the counter value using useState
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
