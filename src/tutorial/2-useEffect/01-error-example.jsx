import { useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello Ma!");
    // This will lead to infinite loop
    setValue(value + 1);
  };

  sayHello();

  return (
    <div>
      <h1>UseEffect Error Example</h1>
      <h1> Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
};

export default UseEffectBasics;
