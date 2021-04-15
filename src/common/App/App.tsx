import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";

import routes from "common/routing/routes";
import darkTheme from "common/styles/darkTheme";
import Router from "common/routing/router";

const App = (): JSX.Element => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <Router routes={routes} />
    </MuiThemeProvider>
  );
};

export default App;
