import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";
import PageMain from "./pages/pageMain";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pageA">
          <PageA />
        </Route>
        <Route path="/pageB">
          <PageB />
        </Route>
        <Route path="/">
          <PageMain />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
