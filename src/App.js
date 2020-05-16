import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./utils/routes";
import GlobalStyles from "./utils/GlobalStyles";

const App = () => {
  return (
    <GlobalStyles>
      <Router>
        <Routes />
      </Router>
    </GlobalStyles>
  );
};

export default App;
