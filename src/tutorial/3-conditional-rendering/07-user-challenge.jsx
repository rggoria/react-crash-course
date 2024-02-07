import { useState } from "react";

const ConditionalRenderingBasics = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>User Challenge</h1>
      {user ? (
        <div>
          <h4>Hello there: {user.name}</h4>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button onClick={() => setUser({ name: "Ram" })}>Login</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRenderingBasics;
