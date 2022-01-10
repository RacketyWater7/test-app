import { useState } from "react";
import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";
import "./App.css";
import "./styles/test.css";

function App() {
  const [val, setVal] = useState(0);
  const statesObject = {
    someState: val,
    someStateUpdater: (value) => setVal(value),
  };
  const handleClick = () => {
    statesObject.someStateUpdater(val + 1);
  };
  //more like a pro
  const thing = `**(3)** This question is about tests for some elements and compounds.
  **(a)** What is the test for hydrogen?
 $~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$**(1)**
 ____
 **(b)** The diagram **Fig.6** shows hydrogen burning in air, and how some of the gases passing through the apparatus are collected and tested.
  A colourless liquid collects in the U-shaped tube and the limewater turns cloudy **very** slowly.
 
 **(i)** Describe a **chemical** test to show that the colourless liquid contains water.
 $~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$**(2)**
 **(ii)** Describe a **physical** test to show that the colourless liquid is pure water.
 $~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$**(2)**
 ___
 **(iii)** A reaction involving carbon dioxide causes the cloudiness in the limewater.
  Place crosses (X) in two boxes to show the correct statements about this reaction.
 - carbon dioxide forms when the hydrogen burns
 - carbon dioxide from the air reacts to cause the cloudiness
 - the cloudiness is caused by the formation of calcium hydroxide
 - the cloudiness is caused by the formation of a white precipitate
 - the reaction in the limewater is an example of oxidation
 
 $~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~$**(2)**`;
  return (
    <div>
      {statesObject.someState}
      <button onClick={handleClick}>update</button>
      commit 2 commit 3 commit 4 commit 5 commit 6 commit 7 commit 8 commit 9 10
      11 new commits in main more <h1 id="flan">commits</h1>
      more commits
      <div>
        <MathpixLoader>
          <MathpixMarkdown text={thing} />
        </MathpixLoader>
      </div>
      preparing ground for rebase from remote commit 2 commit 3 commit 4 commit
      5 commit 6 commit 7 commit 8 commit 9 blah and blah commit 1000000 more
      commits added blah added blah
    </div>
  );
}

export default App;
