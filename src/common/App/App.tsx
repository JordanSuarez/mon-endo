import React, { useEffect, useState } from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";

import routes from "common/routing/routes";
import lightTheme from "common/styles/lightTheme";
import darkTheme from "common/styles/darkTheme";
import Router from "common/routing/router";

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    return setTheme(darkTheme);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Router routes={routes} />
    </MuiThemeProvider>
  );
};

export default App;
