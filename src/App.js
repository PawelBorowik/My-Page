

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  // Link
} from "react-router-dom";
import Home from "./Home"
import Users from "./Users"
import About from "./About"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faTools } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [burgerMenu, setBurgerMenu] = useState()
  const handleClickBurger = () => {
    setBurgerMenu(!burgerMenu)
  }

  return (

    <div className="App">


      <div className="bar">
        <button onClick={() => handleClickBurger()} className={`hamburger hamburger--emphatic ${burgerMenu ? "is-active" : ""}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <Router>
        < div className={`nav ${!burgerMenu ? "nav_hide" : "nav_show"}`}>
          <nav>
            <ul className="nav_ul">
              <li className={`nav_li ${burgerMenu ? "aaa" : ""}`} onClick={() => handleClickBurger()}>
                <NavLink to="/" exact><FontAwesomeIcon icon={faHome} /> Start</NavLink>
              </li>
              <li className={`nav_li ${burgerMenu ? "aaa" : ""}`} onClick={() => handleClickBurger()}>
                <NavLink to="/about"><FontAwesomeIcon icon={faUserAlt} /> O mnie</NavLink>
              </li >
              <li className={`nav_li ${burgerMenu ? "aaa" : ""}`} onClick={() => handleClickBurger()}>
                <NavLink to="/users"><FontAwesomeIcon icon={faTools} /> Projekty</NavLink>
              </li>
              <li className="nav_desktop">
                <NavLink to="/" exact><FontAwesomeIcon icon={faHome} /><span className="nav_start">Start</span></NavLink>
              </li>
              <li className="nav_desktop">
                <NavLink to="/about"><FontAwesomeIcon icon={faUserAlt} /><span className="nav_start">O mnie</span></NavLink>
              </li>
              <li className="nav_desktop">
                <NavLink to="/users"><FontAwesomeIcon icon={faTools} /><span className="nav_start">Umiejętności</span></NavLink>
              </li>
            </ul>
          </nav>
          <footer className="footer"></footer>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

        </Switch>

      </Router>

    </div >
  );
}

export default App;
