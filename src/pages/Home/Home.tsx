import React, { useEffect } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import Pain from "common/components/Pain";
import { Pain as IPain } from "common/types/pains";
import { SportActivity as ISportActivity } from "common/types/sportActivity";
import { RootState } from "common/redux/reducers/root/types";
import { RootAction } from "common/redux/actions/root/types";
import MealForm from "common/components/MealForm";
import SportActivity from "common/components/SportActivity";
import { StylesInterface } from "./styles";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  getDailyPains: () => void;
  getSportActivities: () => void;
  sportActivities: ISportActivity[];
  pains: IPain[];
  saveDate: (state: RootState) => RootAction;
};

const Home = ({
  classes,
  getDailyPains,
  pains,
  saveDate,
  getSportActivities,
  sportActivities,
}: Props): JSX.Element => {
  useEffect(() => {
    saveDate({ date: new Date().toString() });
    getDailyPains();
    getSportActivities();
  }, [getDailyPains, getSportActivities, saveDate]);

  return (
    <Page title="Home">
      <div className={classes.root}>
        <Pain pains={pains} dateTime={new Date().toString()} />
        <div className={classes.container}>
          <MealForm />
          <SportActivity sportActivities={sportActivities} />
        </div>
      </div>
    </Page>
  );
};

export default Home;
