import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);
  const statesObject = {
    someState: val,
    someStateUpdater: (value) => setVal(value),
  };
  const handleClick = () => {
    statesObject.someStateUpdater(val + 1);
  };
  return (
    <div>
      {statesObject.someState}
      <button onClick={handleClick}>update</button>
    </div>
  );
}

export default App;