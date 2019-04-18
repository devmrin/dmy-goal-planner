import React, { Component } from "react";
import moment from "moment";
import { Base } from "layout";

import "./Daily.scss";
class Daily extends Component {
  render() {
    return (
      <Base>
        <div className="daily__heading">today</div>
        <div className="daily__date">{`${moment(new Date()).format(
          "D MMMM YYYY"
        )}`}</div>
      </Base>
    );
  }
}

export default Daily;
