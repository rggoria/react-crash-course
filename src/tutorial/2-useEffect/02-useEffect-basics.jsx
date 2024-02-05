import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello Ma!");
  };

  sayHello();

  useEffect(() => {
    console.log("Hello from useEffect");
  }, []);

  return (
    <div>
      <h1>UseEffect Basics</h1>
      <h1> Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
};

export default UseEffectBasics;
