import { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelte"];
const ControlledInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    console.log(e.target.value);
    setFramework(e.target.value);
  };

  return (
    <div>
      <h2>Other Inputs</h2>
      <form>
        <div>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div>
          <label htmlFor="framework">Framework</label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ControlledInputs;
