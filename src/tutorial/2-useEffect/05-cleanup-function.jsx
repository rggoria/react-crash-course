import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <div>
      <h1>Cleanup Function</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle Component</button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {};
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);

  return <h1>Hello There</h1>;
};

export default UseEffectBasics;
