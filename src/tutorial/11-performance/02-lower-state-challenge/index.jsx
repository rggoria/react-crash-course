import { useState } from "react";
import { data } from "../../../data";
import List from "./List";
import Form from "./Form";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };

  return (
    <div>
      <h5>Performance Lower State Challenge</h5>
      <section>
        <Form addPerson={addPerson} />
        <List people={people} />
      </section>
    </div>
  );
};
export default LowerState;
