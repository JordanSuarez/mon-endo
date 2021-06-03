import React, { useEffect, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Hidden } from "@material-ui/core";

import Page from "common/components/Page";
import Pain from "common/components/Pain";
import { Pain as IPain } from "common/types/pains";
import { SportActivity as ISportActivity } from "common/types/sportActivity";
import { RootState } from "common/redux/reducers/root/types";
import { RootAction } from "common/redux/actions/root/types";
import MealForm from "common/components/MealForm";
import SportActivity from "common/components/SportActivity";
import AppBar from "common/components/AppBar";
import { Meal } from "common/types/meal";
import { MEAL, PAINS, SPORT_ACTIVITIES } from "common/constants/ressources";
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

  const tabs = [
    { id: PAINS, label: "Douleurs" },
    { id: MEAL, label: "Repas" },
    { id: SPORT_ACTIVITIES, label: "Activités" },
  ] as { id: string; label: string }[];
  const components = [
    { id: PAINS, component: <Pain pains={pains} /> },
    { id: MEAL, component: <MealForm meal={meal} date={date} /> },
    {
      id: SPORT_ACTIVITIES,
      component: <SportActivity sportActivities={sportActivities} />,
    },
  ] as { id: string; component: JSX.Element }[];

  return (
    <Page title="Accueil">
      <div className={classes.root}>
        <Hidden smDown>
          <Pain pains={pains} />
          <div className={classes.container}>
            <MealForm meal={meal} date={date} />
            <SportActivity sportActivities={sportActivities} />
          </div>
        </Hidden>
        <Hidden mdUp initialWidth="sm">
          <AppBar
            tabs={tabs}
            components={components}
            className={classes.appBar}
          />
        </Hidden>
      </div>
    </Page>
  );
};

export default Home;
