import React, { Component } from "react";
import { Base } from "layout";
import { ForwardArrow } from "assets";

import "./Yearly.scss";

class Yearly extends Component {
  state = {
    yearlyGoalsArray: [11, 12, 13, 14, 15],
    cfYearlyGoalsArray: [3, 5, 9]
  };

  render() {
    let { yearlyGoalsArray, cfYearlyGoalsArray } = this.state;
    return (
      <Base>
        <div className="yearly__goals__wrapper">
          <div className="yearly__goals__cf__wrapper">
            <div className="yearly__goals__cf__header">
              <img
                src={ForwardArrow}
                alt="forward"
                className="yearly__goals__forwaded__img"
              />
              Carry Forwarded
            </div>
            {cfYearlyGoalsArray.map(goalObj => (
              <div className="yearly__cf__goal__container" key={goalObj}>
                <div className="yearly__cf__goal__radio">
                  <div className="yearly__cf__goal__active" />
                </div>
                <div className={"yearly__cf__goal__text"}>
                  {`Complete Trigonometry Lesson ${goalObj}`}
                </div>
              </div>
            ))}
          </div>
          <div className="yearly__goals__regular__wrapper">
            {yearlyGoalsArray.map((goalObj, i) => (
              <div className="yearly__goal__container" key={goalObj}>
                <div className="yearly__goal__radio">
                  <div className="yearly__goal__active" />
                </div>
                <div className="yearly__goal__text">
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

export default Yearly;
