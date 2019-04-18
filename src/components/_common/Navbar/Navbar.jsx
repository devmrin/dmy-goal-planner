import React, { Component } from "react";
import { NotificationBell } from "assets";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar__wrapper">
        <div className="navbar__search" />
        <div className="navbar__notification">
          <img
            src={NotificationBell}
            alt="notification"
            className="navbar__notification__img"
          />
          <div className="navbar__notification__active" />
        </div>
        <div className="navbar__account" />
      </div>
    );
  }
}

export default Navbar;
