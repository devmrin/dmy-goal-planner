import React, { Component } from "react";
import { NotificationBell, Search } from "assets";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar__wrapper">
        <div className="navbar__search__container">
          <img src={Search} alt="search" className="navbar__search__icon" />
          <input
            type="text"
            className="navbar__search"
            placeholder="Search..."
          />
        </div>
        <div className="navbar__notification">
          <img
            src={NotificationBell}
            alt="notification"
            className="navbar__notification__img"
          />
          <div className="navbar__notification__active" />
        </div>
        <div className="navbar__account">
          <div className="navbar__account__dp">M</div>
          <div className="navbar__account__name">mrinmay mukherjee</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
