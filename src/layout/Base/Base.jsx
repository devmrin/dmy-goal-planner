import React, { Component } from "react";

import { Navbar } from "components/_common";

import "./Base.scss";

class Base extends Component {
  render() {
    return (
      <div className="base__wrapper">
        <div className="base__sidebar" />
        <div className="base__main">
          <div className="base__main__top" />
          <div className="base__main__content">
            <Navbar />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
