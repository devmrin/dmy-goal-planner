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
              <div className="base__body__content__child">
                {this.props.children}
              </div>
            </div>
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
