import useToggle from "./useToggle";

const UseRefBasics = () => {
  const { show, toggle } = useToggle(false);
  return (
    <div>
      <h2>Toggle Custom Hook</h2>
      <button onClick={toggle}>Toggle</button>
      {show && <h4>Some Stuff</h4>}
    </div>
  );
};
export default UseRefBasics;
