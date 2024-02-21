import { useReducer } from "react";
import { data } from "../../data";

import reducer from "./reducers";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  //Initial UseReducer Setup
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };

  const resetList = () => {
    dispatch({ type: "RESET_LIST" });
  };

  const something = () => {
    dispatch({ type: "something" });
  };

  console.log(state);
  return (
    <div>
      <h5>UseReducer Hook Basics</h5>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}

      {state.people.length != 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          Clear
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset
        </button>
      )}
      <div>
        <button
          className="btn"
          style={{ marginTop: "2rem", backgroundColor: "red" }}
          onClick={something}
        >
          Something
        </button>
      </div>
    </div>
  );
};
export default ReducerBasics;
