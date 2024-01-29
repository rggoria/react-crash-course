import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <h2>Greetings Ma!</h2>
//     </div>
//   );
// }

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Greetings Ma!")
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
