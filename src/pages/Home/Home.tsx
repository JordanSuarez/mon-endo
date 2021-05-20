import React, { useEffect } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import DayInformation from "common/components/DayInformation";
import { Pain } from "common/types/pains";
import { DispatchType } from "common/redux/actions/pains/types";
import { RootState } from "common/redux/reducers/root/types";
import { RootAction } from "common/redux/actions/root/types";
import frLocale from "date-fns/locale/fr";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  getDailyPains: DispatchType;
  pains: Array<Pain>;
  saveDate: (state: RootState) => RootAction;
};

const Home = ({
  classes,
  getDailyPains,
  pains,
  saveDate,
}: Props): JSX.Element => {
  useEffect(() => {
    saveDate({ date: formatDate(new Date(), frLocale, dateWithoutHours) });
    getDailyPains();
  }, [getDailyPains, saveDate]);

  return (
    <Page title="Home">
      <div className={classes.root}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <DayInformation items={pains} dateTime={new Date()} />
      </div>
    </Page>
  );
};

export default Home;
