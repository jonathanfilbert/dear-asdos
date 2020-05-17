import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./utils/routes";
import { SnackbarProvider } from "material-ui-snackbar-provider";
import GlobalStyles from "./utils/GlobalStyles";

const App = () => {
  return (
    <SnackbarProvider
      SnackbarProps={{
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      }}
    >
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </SnackbarProvider>
  );
};

export default App;
