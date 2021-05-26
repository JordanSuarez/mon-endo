import React, { useEffect, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import Pain from "common/components/Pain";
import { Pain as IPain } from "common/types/pains";
import { SportActivity as ISportActivity } from "common/types/sportActivity";
import { RootState } from "common/redux/reducers/root/types";
import { RootAction } from "common/redux/actions/root/types";
import MealForm from "common/components/MealForm";
import SportActivity from "common/components/SportActivity";
import { Meal } from "common/types/meal";
import { StylesInterface } from "./styles";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  getDailyPains: () => void;
  getSportActivities: () => void;
  getDailyMeal: () => void;
  sportActivities: ISportActivity[];
  pains: IPain[];
  meal: Meal;
  saveDate: (state: RootState) => RootAction;
};

const Home = ({
  classes,
  getDailyPains,
  pains,
  meal,
  saveDate,
  getSportActivities,
  getDailyMeal,
  sportActivities,
}: Props): JSX.Element => {
  const [date] = useState(new Date().toString() as string);

  useEffect(() => {
    saveDate({ date });
    getDailyPains();
    getDailyMeal();
    getSportActivities();
  }, [date, getDailyMeal, getDailyPains, getSportActivities, saveDate]);

  return (
    <Page title="Home">
      <div className={classes.root}>
        <Pain pains={pains} dateTime={new Date().toString()} />
        <div className={classes.container}>
          <MealForm meal={meal} date={date} />
          <SportActivity sportActivities={sportActivities} />
        </div>
      </div>
    </Page>
  );
};

export default Home;
