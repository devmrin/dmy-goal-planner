import React, { Component } from "react";
import { Base } from "layout";
import { ForwardArrow } from "assets";

import "./Monthly.scss";

class Monthly extends Component {
  state = {
    monthlyGoalsArray: [11, 12, 13, 14, 15],
    cfMonthlyGoalsArray: [3, 5, 9]
  };

  render() {
    let { monthlyGoalsArray, cfMonthlyGoalsArray } = this.state;
    return (
      <Base>
        <div className="monthly__goals__wrapper">
          <div className="monthly__goals__cf__wrapper">
            <div className="monthly__goals__cf__header">
              <img
                src={ForwardArrow}
                alt="forward"
                className="monthly__goals__forwaded__img"
              />
              Carry Forwarded
            </div>
            {cfMonthlyGoalsArray.map(goalObj => (
              <div className="monthly__cf__goal__container" key={goalObj}>
                <div className="monthly__cf__goal__radio">
                  <div className="monthly__cf__goal__active" />
                </div>
                <div className={"monthly__cf__goal__text"}>
                  {`Complete Trigonometry Lesson ${goalObj}`}
                </div>
              </div>
            ))}
          </div>
          <div className="monthly__goals__regular__wrapper">
            {monthlyGoalsArray.map((goalObj, i) => (
              <div className="monthly__goal__container" key={goalObj}>
                <div className="monthly__goal__radio">
                  <div className="monthly__goal__active" />
                </div>
                <div className="monthly__goal__text">
                  {`Complete Trigonometry Lesson ${goalObj}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Base>
    );
  }
}

export default Monthly;
