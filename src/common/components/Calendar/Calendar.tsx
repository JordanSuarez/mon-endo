import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import ReactCalendar, { OnChangeDateCallback } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Paper } from "@material-ui/core";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  onClickDay: (date: Date) => void;
  onChange: OnChangeDateCallback;
  activeStartDate: Date;
};

const Calendar = ({
  classes,
  onClickDay,
  activeStartDate,
  onChange,
}: Props): JSX.Element => {
  return (
    <Paper elevation={3} className={classes.root}>
      <ReactCalendar
        className={classes.calendar}
        onClickDay={onClickDay}
        activeStartDate={activeStartDate}
        value={activeStartDate}
        onChange={onChange}
      />
    </Paper>
  );
};

export default Calendar;
