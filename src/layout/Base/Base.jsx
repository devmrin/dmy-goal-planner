import React, { Component } from "react";

import { Tabs, Navbar, RightSidebar } from "components/_common";

import "./Base.scss";

class Base extends Component {
  render() {
    return (
      <div className="base__wrapper">
        <div className="base__sidebar" />
        <div className="base__body">
          <Navbar />
          <div className="base__body__content">
            <div className="base__body__content__main">
              <Tabs />
              {this.props.children}
            </div>
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
