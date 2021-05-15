import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

import store from "common/redux/store";
import routes from "common/routing/routes";
import lightTheme from "common/styles/lightTheme";
import darkTheme from "common/styles/darkTheme";
import Router from "common/routing/router";
import firebaseConfig from "common/firebase/firebaseConfig";
import Toast from "common/components/Toast";

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
      <Provider store={store}>
        <Router routes={routes} />
        <Toast />
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
