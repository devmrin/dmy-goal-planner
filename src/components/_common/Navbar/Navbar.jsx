import React, { Component } from "react";

import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar__wrapper">
        <div className="navbar__search" />
        <div className="navbar__notification" />
        <div className="navbar__account" />
      </div>
    );
  }
}

export default Navbar;
