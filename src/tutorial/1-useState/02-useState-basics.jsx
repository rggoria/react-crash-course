import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>UseState Basics</h1>
      <h2> You clicked {count} times </h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default UseStateBasics;
