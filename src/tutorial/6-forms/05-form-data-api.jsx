import { useState } from "react";

const ControlledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <div>
      <h2>Form Data API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ControlledInputs;
