import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar__wrapper">
        <ul className="navbar__menu">
          <NavLink
            className="navbar__menu__item"
            to="/daily"
            activeClassName="navbar__menu__item__active"
          >
            Daily
          </NavLink>
          <NavLink
            to="/monthly/"
            className="navbar__menu__item"
            activeClassName="navbar__menu__item__active"
          >
            Monthly
          </NavLink>
          <NavLink
            to="/yearly/"
            className="navbar__menu__item"
            activeClassName="navbar__menu__item__active"
          >
            Yearly
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
