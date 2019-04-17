import React, { Component } from "react";

import { Navbar } from "components/_common";

import "./Base.scss";

class Base extends Component {
  render() {
    return (
      <div className="base__wrapper">
        <div className="base__sidebar" />
        <div className="base__body">
          <div className="base__body__header" />
          <div className="base__body__content">
            <div className="base__body__content__main">
              <Navbar />
              {this.props.children}
            </div>
            <div className="base__body__content__sidebar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
