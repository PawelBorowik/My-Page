import React from 'react';

import './App.css';
import { useState } from 'react';

function App() {

  const [x, setX] = useState()

  const handleClick = () => {
    setX(!x)


  }
  return (

    <div className="App">
      <p>console.log("welcome word")</p>
      <div className="x">
        <button onClick={() => handleClick()} className={`hamburger hamburger--emphatic ${x ? "is-active" : ""}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      < div className={`nav ${!x ? "hide" : "show"}`
      }>
        <ul>
          <li onClick={() => handleClick()} >Michał</li>
          <li onClick={() => handleClick()} >Kamila</li>

        </ul>
      </div >
    </div >
  );
}

export default App;
