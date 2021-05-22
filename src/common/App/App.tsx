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
import Toast from "common/components/Toast";
import Drawer from "common/components/Drawer";
import { RootState } from "common/redux/reducers/root/types";

type Props = {
  saveDate: (state: RootState) => void;
};
const App = ({ saveDate }: Props): JSX.Element => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    saveDate({ date: new Date().toString() });
    return setTheme(lightTheme);
  }, [saveDate]);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Router routes={routes} />
      <Toast />
      <Drawer />
    </MuiThemeProvider>
  );
};

export default App;
