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
<<<<<<< HEAD
      commit 2 commit 3 commit 4 commit 5 commit 6
=======
      commit 2 commit 3 commit 4 commit 5 commit 6 commit 7 commit 8 commit 9
>>>>>>> fcc01f5... added 8 and 9 commit in branchA
    </div>
  );
}

export default App;
