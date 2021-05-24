import React, { useEffect } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import DayInformation from "common/components/DayInformation";
import { Pain } from "common/types/pains";
import { RootState } from "common/redux/reducers/root/types";
import { RootAction } from "common/redux/actions/root/types";
import MealForm from "common/components/MealForm";
import SportActivity from "common/components/SportActivity";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  getDailyPains: () => void;
  pains: Pain[];
  saveDate: (state: RootState) => RootAction;
};

const Home = ({
  classes,
  getDailyPains,
  pains,
  saveDate,
}: Props): JSX.Element => {
  useEffect(() => {
    saveDate({ date: new Date().toString() });
    getDailyPains();
  }, [getDailyPains, saveDate]);
  return (
    <Page title="Home">
      <div className={classes.root}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <DayInformation items={pains} dateTime={new Date()} />
        <div className={classes.container}>
          <MealForm />
          <SportActivity />
        </div>
      </div>
    </Page>
  );
};

export default Home;
