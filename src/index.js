import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h2>Greetings Ma!</h2>
        <ul>
          <li>
            <a href="#">Hello World</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
    </React.Fragment>

    //Short-Hand
    // <>
    //   <div>
    //     <h2>Greetings Ma!</h2>
    //     <ul>
    //       <li>
    //         <a href="#">Hello World</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <h2>hello world</h2>
    // </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
