import React, { useEffect, useRef, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import firebase from "firebase/app";
import { keys } from "lodash";

import Page from "common/components/Page";
import DayInformation from "common/components/DayInformation";
import { painsRef } from "common/firebase/pains";
import { Pain } from "common/types/pains";
import frLocale from "date-fns/locale/fr";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { useList } from "react-firebase-hooks/database";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

const Home = ({ classes }: Props): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [painsList, setPainsList] = useState([] as Array<Pain>);
  const drawerRef = useRef<JSX.Element>(null);
  const date = new Date();
  const currentDate = formatDate(frLocale, date, dateWithoutHours);
  // const [userId, setUserId] = useState("");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const [snapshots] = useList(getPains(userId));

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // setUserId(user.uid);
        painsRef(user.uid).then((values) => {
          values.once("value", (snap) => {
            const painsObject = snap.val();
            const pains = keys(painsObject)
              .filter((id) => {
                const datePain = formatDate(
                  frLocale,
                  new Date(painsObject[id].date),
                  dateWithoutHours
                );
                return datePain === currentDate;
              })
              .map((id) => ({
                id,
                ...painsObject[id],
              }));
            setPainsList(pains);
          });
        });
      }
    });
  }, [currentDate]);

  return (
    <Page
      title="Home"
      drawerRef={drawerRef}
      toggleDrawer={toggleDrawer}
      isOpen={isDrawerOpen}
    >
      <div className={classes.root}>
        <DayInformation items={painsList} toggleDrawer={toggleDrawer} />
      </div>
    </Page>
  );
};

export default Home;
