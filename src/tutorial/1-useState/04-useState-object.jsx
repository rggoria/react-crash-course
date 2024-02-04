import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ram",
    age: 24,
    hobby: "Creating Apps",
  });

  const displayPerson = () => {
    setPerson({ ...person, name: "Clifford" });
  };
  return (
    <div>
      <h1>UseState Object</h1>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button onClick={displayPerson}>Change User</button>
    </div>
  );
};

export default UseStateObject;
