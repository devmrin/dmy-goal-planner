import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";

import "./RightSidebar.scss";

export class RightSidebar extends Component {
  state = {
    currentPath: ""
  };

  componentDidMount() {
    switch (this.props.history.location.pathname) {
      case "/daily":
        this.setState({ currentPath: "daily" });
        break;
      case "/monthly":
        this.setState({ currentPath: "monthly" });
        break;
      case "/yearly":
        this.setState({ currentPath: "yearly" });
        break;
      default:
        this.setState({ currentPath: "daily" });
    }
  }

  render() {
    let { currentPath } = this.state;
    let currDate = moment().format("DD");
    let prevDate = moment()
      .subtract(1, "days")
      .format("DD");
    let nextDate = moment()
      .add(1, "days")
      .format("DD");
    let currMonth = moment().format("MMM");
    let prevMonth = moment()
      .subtract(1, "months")
      .format("MMM");
    let nextMonth = moment()
      .add(1, "months")
      .format("MMM");
    let currYear = moment().format("YYYY");
    let prevYear = moment()
      .subtract(1, "year")
      .format("YYYY");
    let nextYear = moment()
      .add(1, "year")
      .format("YYYY");
    return (
      <div className="r-sidebar__wrapper">
        {currentPath === "daily" && (
          <div className="r-sidebar__daily__calendar">
            <div className="r-sidebar__daily">
              <div className="r-sidebar__daily__left">{prevDate}</div>
              <div className="r-sidebar__daily__center">{currDate}</div>
              <div className="r-sidebar__daily__right">{nextDate}</div>
            </div>
          </div>
        )}
        {currentPath === "monthly" && (
          <div className="r-sidebar__monthly__calendar">
            <div className="r-sidebar__monthly">
              <div className="r-sidebar__monthly__left">{prevMonth}</div>
              <div className="r-sidebar__monthly__center">{currMonth}</div>
              <div className="r-sidebar__monthly__right">{nextMonth}</div>
            </div>
          </div>
        )}
        {currentPath === "yearly" && (
          <div className="r-sidebar__yearly__calendar">
            <div className="r-sidebar__yearly">
              <div className="r-sidebar__yearly__left">{prevYear}</div>
              <div className="r-sidebar__yearly__center">{currYear}</div>
              <div className="r-sidebar__yearly__right">{nextYear}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(RightSidebar);
