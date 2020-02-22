

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import Users from "./Users"
import About from "./About"
import './hamburger.css'
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faTools } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [x, setX] = useState()

  const handleClick = () => {
    setX(!x)

  }
  return (

    <div className="App">

      <div className="x">
        <button onClick={() => handleClick()} className={`hamburger hamburger--emphatic ${x ? "is-active" : ""}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <Router>
        < div className={`nav ${!x ? "hide" : "show"}`}>
          <nav>
            <ul>
              <li onClick={() => handleClick()}>
                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
              </li>
              <li onClick={() => handleClick()}>
                <Link to="/about"><FontAwesomeIcon icon={faUserAlt} /></Link>
              </li >
              <li onClick={() => handleClick()}>
                <Link to="/users"><FontAwesomeIcon icon={faTools} /></Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div >
  );
}

export default App;
