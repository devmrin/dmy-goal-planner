import React, { Component } from "react";

import "./RightSidebar.scss";

export class RightSidebar extends Component {
  render() {
    return (
      <div className="r-sidebar__wrapper">
        <div className="r-sidebar__calendar" />
      </div>
    );
  }
}

export default RightSidebar;
