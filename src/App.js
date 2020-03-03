
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
  const [footerArrow, setFooterArrow] = useState()
  const handleFooterArrow = () => {
    setFooterArrow(!footerArrow)
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
        < div className={`nav ${!burgerMenu ? "" : "nav_show"}`}>
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

        <footer className={`footer ${!footerArrow ? "footer_hide" : "footer_show"}`}>
          <div className={`footer_arrow ${!footerArrow ? "open--footer" : ""}`} onClick={() => handleFooterArrow()}>
            <div></div>
            <span className="footer_left-bar"></span>
            <span className="footer_right-bar"></span>
          </div>
          <div className="footer_content">footer</div>
          <div className={`footer_desktop ${!burgerMenu ? "footer--hide" : "footer--show"}`} onClick={() => handleClickBurger()}>footer</div>
        </footer>
      </Router>

    </div >
  );
}

export default App;
