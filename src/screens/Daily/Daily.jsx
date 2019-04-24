import React, { Component } from "react";
import { connect } from "react-redux";
import nanoid from "nanoid";
import moment from "moment";
import { updateGoalsArray } from "ducks";

import { Base } from "layout";
import { Plus, ForwardArrow, Empty } from "assets";

import "./Daily.scss";
class Daily extends Component {
  state = {
    text:
      "Some of the biggest lorems ipsums aren't really the most impressive thing in the whole wide world!"
  };

  handleAddGoal = async () => {
    let existingGoals = this.props.goalsArray;
    let goalObj = {
      id: nanoid(),
      uuid: 1,
      text: this.state.text,
      status: "inc",
      type: "daily",
      date: moment().format()
    };

    await this.props.updateGoalsArray({
      goalsArray: [...existingGoals, goalObj]
    });
    window.localStorage.setItem(
      "goalsArray",
      JSON.stringify(this.props.goalsArray)
    );
  };

  updateGoalStatus = async id => {
    let existingGoals = this.props.goalsArray;
    let updatedGoals = existingGoals.map(goalObj => {
      if (goalObj.id === id) {
        if (goalObj.status === "inc") {
          goalObj.status = "c";
        } else {
          goalObj.status = "inc";
        }
      }
      return goalObj;
    });

    await this.props.updateGoalsArray({
      goalsArray: [...updatedGoals]
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
          <div className="daily__add__button" onClick={this.handleAddGoal}>
            <img src={Plus} alt="plus" className="daily__add__button__plus" />
          </div>
          {dailyGoalsArray.length === 0 ? (
            <>
              <div className="daily__goals__empty__container">
                <img src={Empty} alt="empty" className="daily__goals__empty" />
                <div className="daily__goals__empty__text">
                  Whoa! I see no goals.
                </div>
              </div>
            </>
          ) : (
            <div className="daily__goals__container">
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
                    <div
                      className="daily__cf__goal__container"
                      key={goalObj.id}
                    >
                      <div className="daily__cf__goal__radio">
                        <div className="daily__cf__goal__active" />
                      </div>
                      <div className={"daily__cf__goal__text"}>
                        {goalObj.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="daily__goals__regular__wrapper">
                {dailyGoalsArray &&
                  dailyGoalsArray.map((goalObj, i) => (
                    <div
                      className="daily__goal__container"
                      key={goalObj.id}
                      onClick={() => this.updateGoalStatus(goalObj.id)}
                    >
                      <div className="daily__goal__radio">
                        {goalObj.status === "c" && (
                          <div className="daily__goal__active" />
                        )}
                      </div>
                      <div
                        className={
                          goalObj.status === "c"
                            ? "daily__goal__text daily__goal__text__checked"
                            : "daily__goal__text"
                        }
                      >
                        {goalObj.text}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
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
