import React, { useEffect, useState } from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

import routes from "common/routing/routes";
import lightTheme from "common/styles/lightTheme";
import darkTheme from "common/styles/darkTheme";
import Router from "common/routing/router";
import firebaseConfig from "common/firebase/firebaseConfig";

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    return setTheme(lightTheme);
  }, []);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Router routes={routes} />
    </MuiThemeProvider>
  );
};

export default App;
