// import { useState } from "react";

const Counter = ({count, decrement, increment}) => {
  //  const [count, setCount] = useState(0);

  // const decrement = () => count.setCount((prevCount) => prevCount - 1);
  // const increment = () => count.setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
