import { useState } from "react";

const ControlledInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h2>Multiple Inputs</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ControlledInputs;
