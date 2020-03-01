

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
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
                <NavLink to="/"> <FontAwesomeIcon icon={faHome} /></NavLink>
              </li>
              <li className={`nav_li ${burgerMenu ? "aaa" : ""}`} onClick={() => handleClickBurger()}>
                <NavLink to="/about"><FontAwesomeIcon icon={faUserAlt} /></NavLink>
              </li >
              <li className={`nav_li ${burgerMenu ? "aaa" : ""}`} onClick={() => handleClickBurger()}>
                <NavLink to="/users"><FontAwesomeIcon icon={faTools} /></NavLink>
              </li>
              <li className="nav_desktop">
                <NavLink to="/home"><FontAwesomeIcon icon={faHome} /><span className="nav_start">Start</span></NavLink>
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
