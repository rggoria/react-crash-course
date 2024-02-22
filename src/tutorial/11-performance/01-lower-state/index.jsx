import { useState } from "react";
import { data } from "../../../data";
import List from "./List";
import Counter from "./Counter";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <h5>Performance</h5>
      <section>
        <Counter />
        <List people={people} />
      </section>
    </div>
  );
};
export default LowerState;
