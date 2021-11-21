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
      commit 2 commit 3 commit 4 commit 5 commit 6 commit 7
    </div>
  );
}

export default App;
