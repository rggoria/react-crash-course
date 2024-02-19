import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null);

  const isMounted = useRef(false);
  // console.log(refContainer);

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <h2>UseRef Basics</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={refContainer} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <h1>Value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
};
export default UseRefBasics;
