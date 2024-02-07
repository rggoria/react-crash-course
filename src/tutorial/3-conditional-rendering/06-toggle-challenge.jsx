import { useState } from "react";

const ConditionalRenderingBasics = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <h1>Toggle Challenge</h1>
      <button onClick={() => setShowAlert(!showAlert)}>Toggle</button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Hello Ma!</h1>
    </div>
  );
};

export default ConditionalRenderingBasics;
