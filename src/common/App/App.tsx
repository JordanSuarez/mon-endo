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
import PainForm from "common/components/PainForm";
import frLocale from "date-fns/locale/fr";
import { RootState } from "common/redux/reducers/root/types";
import { dateWithoutHours, formatDate } from "../helpers/date";

type Props = {
  saveRoot: (state: RootState) => void;
};
const App = ({ saveRoot }: Props): JSX.Element => {
  const [theme, setTheme] = useState(darkTheme);

  const date = new Date();
  const currentDate = formatDate(frLocale, date, dateWithoutHours);

  useEffect(() => {
    saveRoot({ date: currentDate });
    return setTheme(lightTheme);
  }, [currentDate, saveRoot]);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Router routes={routes} />
      <Toast />
      <PainForm />
    </MuiThemeProvider>
  );
};

export default App;
