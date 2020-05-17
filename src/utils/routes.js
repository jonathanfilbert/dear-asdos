import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../containers/HomePage";
import MessagePage from "../containers/MessagePage";

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
