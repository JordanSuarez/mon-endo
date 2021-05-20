import React, { useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import ReactCalendar from "common/components/Calendar";
import frLocale from "date-fns/locale/fr";
import DayInformation from "common/components/DayInformation";
import { Pain } from "common/types/pains";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { DispatchType, PainsAction } from "common/redux/actions/pains/types";
import { RootAction } from "common/redux/actions/root/types";
import { RootState } from "common/redux/reducers/root/types";
import { StylesInterface } from "./styles";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  pains: Array<Pain>;
  getPains: (date: string) => PainsAction;
  saveDate: (state: RootState) => RootAction;
  getDailyPains: DispatchType;
};

const Calendar = ({
  classes,
  pains,
  getPains,
  saveDate,
}: Props): JSX.Element => {
  const [dateSelected, setDateSelected] = useState(new Date() as Date);

  const dateFormatted = (date: Date) =>
    formatDate(date, frLocale, dateWithoutHours);

  useEffect(() => {
    getPains(dateFormatted(dateSelected));
  }, [dateSelected, getPains]);

  const handleClickDay = (date: Date) => {
    setDateSelected(date);
    saveDate({ date: dateFormatted(date) });
    getPains(dateFormatted(date));
  };

  return (
    <Page title="Calendar">
      <div className={classes.root}>
        <ReactCalendar onClickDay={handleClickDay} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <DayInformation items={pains} dateTime={dateSelected} />
      </div>
    </Page>
  );
};

export default Calendar;
