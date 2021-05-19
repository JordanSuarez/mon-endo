import React, { useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/styles";

import Page from "common/components/Page";
import ReactCalendar from "common/components/Calendar";
import frLocale from "date-fns/locale/fr";
import DayInformation from "common/components/DayInformation";
import { Pain } from "common/types/pains";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { DispatchType, PainsAction } from "common/redux/actions/pains/types";
import { StylesInterface } from "./styles";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  pains: Array<Pain>;
  getPains: (date: string) => PainsAction;
  getDailyPains: DispatchType;
};

const Calendar = ({
  classes,
  pains,
  getPains,
  getDailyPains,
}: Props): JSX.Element => {
  const [dateSelected, setDateSelected] = useState(new Date() as Date);

  useEffect(() => {
    // getDailyPains();
    console.log(dateSelected);
  }, [pains, dateSelected]);

  const handleClickDay = (date: Date) => {
    setDateSelected(date);
    const dateFormatted = formatDate(frLocale, date, dateWithoutHours);
    getPains(dateFormatted);
  };

  const handleChange = (date: any) => {
    console.log(date);
  };
  return (
    <Page title="Calendar">
      <div className={classes.root}>
        <ReactCalendar
          onClickDay={handleClickDay}
          activeStartDate={dateSelected}
          onChange={handleChange}
        />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <DayInformation items={pains} dateTime={dateSelected} />
      </div>
    </Page>
  );
};

export default Calendar;
