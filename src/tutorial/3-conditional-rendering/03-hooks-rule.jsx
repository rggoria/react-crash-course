import { useEffect, useState } from "react";

const ConditionalRenderingBasics = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    return <h2>Condition stops here</h2>;
  }

  useEffect(() => {
    console.log("Hello there");
  }, []);

  return (
    <div>
      <h1>Hooks Rule</h1>
    </div>
  );
};

export default ConditionalRenderingBasics;
