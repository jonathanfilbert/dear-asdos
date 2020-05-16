import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../containers/HomePage";
import MessagePage from "../containers/MessagePage";
import TeaserPage from "../containers/TeaserPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/message" exact>
        <MessagePage />
      </Route>
    </Switch>
  );
};

export default Routes;
