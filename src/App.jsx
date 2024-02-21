import "./App.css";
import { useGlobalContext } from "./tutorial/9-context-api/04-global-context/context";

function App() {
  const { name } = useGlobalContext();
  console.log(name);

  return (
    <div>
      <h5>Global Context</h5>
    </div>
  );
}

export default App;
