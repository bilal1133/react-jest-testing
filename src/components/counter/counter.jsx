import { useState } from "react";

const Counter = () => {
  const [value, setvalue] = useState(0);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3 data-testid="header">Counter NEW</h3>
      <h6 data-testid="value">{counter}</h6>
      <button
        data-testid="minus-btn"
        onClick={() => {
          setCounter(+counter - +value);
        }}
      >
        -
      </button>
      <input
        data-testid="input"
        type="number"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <button
        data-testid="plus-btn"
        onClick={() => {
          setCounter(+value + +counter);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
