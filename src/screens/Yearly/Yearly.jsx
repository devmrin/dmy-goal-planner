import React, { Component } from "react";
import moment from "moment";
import { Base } from "layout";

import "./Yearly.scss";

class Yearly extends Component {
  render() {
    return (
      <Base>
        <div className="yearly__heading">this year</div>
        <div className="yearly__date">{`${moment(new Date()).format(
          "YYYY"
        )}`}</div>
      </Base>
    );
  }
}

export default Yearly;
