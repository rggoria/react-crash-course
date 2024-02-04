const UseStateBasics = () => {
  let count = 0;
  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h1>UseState Error Example</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default UseStateBasics;
