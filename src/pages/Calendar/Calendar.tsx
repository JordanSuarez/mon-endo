import React, { useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import ReactCalendar from "common/components/Calendar";
import Pain from "common/components/Pain";
import { Pain as IPain } from "common/types/pains";
import { PainsAction } from "common/redux/actions/pains/types";
import { RootAction } from "common/redux/actions/root/types";
import { RootState } from "common/redux/reducers/root/types";
import MealForm from "common/components/MealForm";
import SportActivity from "common/components/SportActivity";
import { SportActivity as ISportActivity } from "common/types/sportActivity";
import { Meal } from "common/types/meal";
import { MealAction } from "common/redux/actions/meal/types";
import { SportActivitiesAction } from "common/redux/actions/sportActivities/types";
import { Hidden } from "@material-ui/core";
import { StylesInterface } from "./styles";
import AppBar from "../../common/components/AppBar";
import {
  MEAL,
  PAINS,
  SPORT_ACTIVITIES,
} from "../../common/constants/ressources";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  pains: IPain[];
  meal: Meal;
  sportActivities: ISportActivity[];
  getPains: (date: string) => PainsAction;
  saveDate: (state: RootState) => RootAction;
  getDailyPains: () => PainsAction;
  getSportActivities: () => SportActivitiesAction;
  getMeal: (date: string) => MealAction;
};

const Calendar = ({
  classes,
  pains,
  meal,
  getPains,
  saveDate,
  getSportActivities,
  sportActivities,
  getMeal,
}: Props): JSX.Element => {
  const [dateSelected, setDateSelected] = useState(
    new Date().toString() as string
  );

  useEffect(() => {
    getSportActivities();
    getPains(dateSelected);
    getMeal(dateSelected);
  }, [dateSelected, getMeal, getPains, getSportActivities]);

  const handleClickDay = (date: Date) => {
    setDateSelected(date.toString());
    saveDate({ date: date.toString() });
  };

  const tabs = [
    { id: PAINS, label: "Douleurs" },
    { id: MEAL, label: "Repas" },
    { id: SPORT_ACTIVITIES, label: "Activités" },
  ] as { id: string; label: string }[];
  const components = [
    { id: PAINS, component: <Pain pains={pains} /> },
    { id: MEAL, component: <MealForm meal={meal} date={dateSelected} /> },
    {
      id: SPORT_ACTIVITIES,
      component: <SportActivity sportActivities={sportActivities} />,
    },
  ] as { id: string; component: JSX.Element }[];

  return (
    <Page title="Calendriers">
      <div className={classes.root}>
        <Hidden smDown>
          <ReactCalendar onClickDay={handleClickDay} />
          <Pain pains={pains} />
          <div className={classes.container}>
            <MealForm meal={meal} date={dateSelected} />
            <SportActivity sportActivities={sportActivities} />
          </div>
        </Hidden>
        <Hidden mdUp initialWidth="sm">
          <ReactCalendar onClickDay={handleClickDay} />
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

export default Calendar;
