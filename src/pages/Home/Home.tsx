import React, { useEffect } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import DayInformation from "common/components/DayInformation";
import { Pain } from "common/types/pains";
import { DispatchType } from "common/redux/actions/pains/types";
import frLocale from "date-fns/locale/fr";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { RootState } from "common/redux/reducers/root/types";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  getDailyPains: DispatchType;
  pains: Array<Pain>;
  saveRoot: (state: RootState) => void;
};

const Home = ({
  classes,
  getDailyPains,
  pains,
  saveRoot,
}: Props): JSX.Element => {
  const date = new Date();
  const currentDate = formatDate(frLocale, date, dateWithoutHours);

  useEffect(() => {
    getDailyPains();
  }, [getDailyPains]);

  useEffect(() => {
    saveRoot({ date: currentDate });
  }, [currentDate, saveRoot]);
  return (
    <Page title="Home">
      <div className={classes.root}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <DayInformation items={pains} dateTime={date} />
      </div>
    </Page>
  );
};

export default Home;
