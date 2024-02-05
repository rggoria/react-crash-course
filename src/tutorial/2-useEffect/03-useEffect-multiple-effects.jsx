import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("Hello from first useEffect");
  }, [value]);

  useEffect(() => {
    console.log("Hello from second useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>UseEffect Multiple Effects</h1>
      <h1> Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <h1> Second Value: {secondValue}</h1>
      <button onClick={() => setSecondValue(secondValue + 1)}>
        Increase Second
      </button>
    </div>
  );
};

export default UseEffectBasics;
