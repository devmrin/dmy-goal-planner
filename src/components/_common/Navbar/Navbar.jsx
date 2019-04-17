import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar__wrapper">
        <ul className="navbar__menu">
          <Link className="navbar__menu__item" to="/daily">
            Daily
          </Link>
          <Link to="/monthly/" className="navbar__menu__item">
            Monthly
          </Link>
          <Link to="/yearly/" className="navbar__menu__item">
            Yearly
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
