import { useCallback, useMemo, useState } from "react";
import { data } from "../../../data";
import List from "./List";
import slowFunction from "./slowFunction";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPerson = people.filter((person) => person.id !== id);
      setPeople(newPerson);
    },
    [people]
  );

  return (
    <div>
      <h5>UseMemo Hook</h5>
      <section>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Count {count}
        </button>
        <List people={people} removePerson={removePerson} />
      </section>
    </div>
  );
};
export default LowerState;
