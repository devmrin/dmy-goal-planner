import React, { Component } from "react";
import { Base } from "layout";
import { ForwardArrow } from "assets";

import "./Daily.scss";
class Daily extends Component {
  state = {
    dailyGoalsArray: [11, 12, 13, 14, 15],
    cfDailyGoalsArray: [3, 5, 9]
  };

  render() {
    let { dailyGoalsArray, cfDailyGoalsArray } = this.state;
    return (
      <Base>
        <div className="daily__goals__wrapper">
          <div className="daily__goals__cf__wrapper">
            <div className="daily__goals__cf__header">
              <img
                src={ForwardArrow}
                alt="forward"
                className="daily__goals__forwaded__img"
              />
              Carry Forwarded
            </div>
            {cfDailyGoalsArray.map(goalObj => (
              <div className="daily__cf__goal__container" key={goalObj}>
                <div className="daily__cf__goal__radio">
                  <div className="daily__cf__goal__active" />
                </div>
                <div className={"daily__cf__goal__text"}>
                  {`Complete Trigonometry Lesson ${goalObj}`}
                </div>
              </div>
            ))}
          </div>
          <div className="daily__goals__regular__wrapper">
            {dailyGoalsArray.map((goalObj, i) => (
              <div className="daily__goal__container" key={goalObj}>
                <div className="daily__goal__radio">
                  <div className="daily__goal__active" />
                </div>
                <div className="daily__goal__text">
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

export default Daily;
