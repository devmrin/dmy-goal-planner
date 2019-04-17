import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Tabs.scss";

class Tabs extends Component {
  render() {
    return (
      <nav className="tabbar__wrapper">
        <ul className="tabbar__menu">
          <NavLink
            className="tabbar__menu__item"
            to="/daily"
            activeClassName="tabbar__menu__item__active"
          >
            Daily
          </NavLink>
          <NavLink
            to="/monthly/"
            className="tabbar__menu__item"
            activeClassName="tabbar__menu__item__active"
          >
            Monthly
          </NavLink>
          <NavLink
            to="/yearly/"
            className="tabbar__menu__item"
            activeClassName="tabbar__menu__item__active"
          >
            Yearly
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Tabs;
