import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Update input field based on button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Evaluate the expression when "=" is clicked
  const handleEqual = () => {
    try {
      setResult(eval(input)); // Avoid using eval in production, use a safer alternativ    
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear input and result
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled placeholder="0" />
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        

      </div>
    </div>
  );
};

export default Calculator;
