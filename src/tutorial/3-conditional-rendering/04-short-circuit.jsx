import { useState } from "react";

const ConditionalRenderingBasics = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Ram");

  const codeExample = text || "Hello Ma!";

  return (
    <div>
      <h1>Short Circuit Overview</h1>
      <h4>Falsy OR : {text || "Hello Ma!"}</h4>
      <h4>Falsy AND : {text && "Hello Ma!"}</h4>
      <h4>Truthy OR : {name || "Hello Ma!"}</h4>
      <h4>Truthy AND : {name && "Hello Ma!"}</h4>
      {codeExample}
    </div>
  );
};

export default ConditionalRenderingBasics;
