import { useState } from "react";

const ConditionalRenderingBasics = () => {
  // falsy
  const [text, setText] = useState("");

  // truthy
  const [name, setName] = useState("Ram");
  const [user, setUser] = useState({ name: "Emerson" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1>Short Circuit Examples</h1>
      <h2>{text || "Default Value"}</h2>
      {text && (
        <div>
          <h2>Whatever Return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2>Ternary Operator</h2>
      <button>{isEditing ? "Edit" : "Add"}</button>
      {user ? (
        <div>
          <h2>Hello ther user {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Whatever Return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ConditionalRenderingBasics;
