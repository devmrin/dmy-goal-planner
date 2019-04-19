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
          "Do MMMM YYYY"
        )}`}</div>
        <div className="daily__goals__wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((goalObj, i) => (
            <div className="daily__goal__container" key={goalObj}>
              <div className="daily__goal__radio">
                <div className="daily__goal__active" />
              </div>
              <div className="daily__goal__text">
                {`Complete Trigonometry Lesson ${i + 1}`}
              </div>
            </div>
          ))}
        </div>
      </Base>
    );
  }
}

export default Daily;
