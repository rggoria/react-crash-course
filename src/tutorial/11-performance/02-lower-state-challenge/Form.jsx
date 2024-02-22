import { useState } from "react";

const Form = ({ addPerson }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please provide a name value");
      return;
    }
    addPerson(name);
    setName("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name..."
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-block">Submit</button>
      </form>
    </div>
  );
};
export default Form;
