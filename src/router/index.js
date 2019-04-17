import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Daily, Monthly, Yearly } from "screens";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Daily} />
        <Route path="/daily/" exact component={Daily} />
        <Route path="/monthly/" exact component={Monthly} />
        <Route path="/yearly/" exact component={Yearly} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
