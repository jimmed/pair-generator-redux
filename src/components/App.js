import React from "react";

function App({ students, pairs, done, generatePairs }) {
  return (
    <React.Fragment>
      <button type="button" disabled={!done} onClick={generatePairs}>
        Generate Pairs
      </button>
      <ul>
        {pairs.map(([one, two], i) => (
          <li key={i}>
            <span className="one">{one}</span> with{" "}
            <span className="two">{two}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
