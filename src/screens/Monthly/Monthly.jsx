import React, { Component } from "react";
import moment from "moment";
import { Base } from "layout";

import "./Monthly.scss";

class Monthly extends Component {
  render() {
    return (
      <Base>
        <div className="monthly__heading">this month</div>
        <div className="monthly__date">{`${moment(new Date()).format(
          "MMMM"
        )}`}</div>
      </Base>
    );
  }
}

export default Monthly;
