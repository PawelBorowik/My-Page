import React from 'react';

import './App.css';
import { useState } from 'react';

function App() {

  const [x, setX] = useState(false)

  const handleClick = () => {
    setX(!x)

  }
  return (
    <div className="App">
      <p>console.log("welcome word")</p>

      <div className="x" onClick={() => handleClick()}>{x ? "X" : "T"}</div>
      <div className={`nav ${x ? "navShow" : "navHide"}`}>

      </div>
    </div>
  );
}

export default App;
