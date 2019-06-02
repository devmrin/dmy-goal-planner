import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Daily, Monthly, Yearly } from "screens";
import { updateGoalsArray } from "ducks";
import { connect } from "react-redux";

class AppRouter extends React.Component {
  componentDidMount() {
    if (window.localStorage.getItem("goalsArray")) {
      this.props.updateGoalsArray({
        goalsArray: JSON.parse(window.localStorage.getItem("goalsArray"))
      });
    } else {
      this.props.updateGoalsArray({
        goalsArray: []
      });
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/daily/" />} />
          <Route path="/daily/" exact component={Daily} />
          <Route path="/monthly/" exact component={Monthly} />
          <Route path="/yearly/" exact component={Yearly} />
        </Switch>
      </Router>
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
)(AppRouter);
