import React, { Component } from "react";
import { connect } from "react-redux";
import nanoid from "nanoid";
import { updateGoalsArray } from "ducks";

import { Base } from "layout";
import { ForwardArrow } from "assets";

import "./Daily.scss";
class Daily extends Component {
  handleAddGoal = async () => {
    let existingGoals = this.props.goalsArray;
    await this.props.updateGoalsArray({
      goalsArray: [...existingGoals, nanoid()]
    });
    window.localStorage.setItem(
      "goalsArray",
      JSON.stringify(this.props.goalsArray)
    );
  };
  render() {
    let dailyGoalsArray = this.props.goalsArray; //Add filtering logic
    let cfDailyGoalsArray = []; //Add filtering logic
    return (
      <Base>
        <div className="daily__goals__wrapper">
          {cfDailyGoalsArray && cfDailyGoalsArray.length > 0 && (
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
          )}
          <div className="daily__goals__regular__wrapper">
            {dailyGoalsArray &&
              dailyGoalsArray.map((goalObj, i) => (
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
          <button onClick={this.handleAddGoal}>Add goal</button>
        </div>
      </Base>
    );
  }
}

const mapStateToProps = state => ({
  goalsArray: state.base.goalsArray
});

const mapDispatchToProps = dispatch => ({
  updateGoalsArray: payload => dispatch(updateGoalsArray(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Daily);
