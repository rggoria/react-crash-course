import { data } from "./data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const removePeople = people.filter((person) => person.id !== id);
    setPeople(removePeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      <h1>UseState Array</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
