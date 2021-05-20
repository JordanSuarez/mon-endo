import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import ReactCalendar, { DateCallback } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Paper } from "@material-ui/core";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  onClickDay: DateCallback;
};

const Calendar = ({ classes, onClickDay }: Props): JSX.Element => {
  return (
    <Paper elevation={3} className={classes.root}>
      <ReactCalendar
        className={classes.calendar}
        onClickDay={onClickDay}
        maxDate={new Date()}
        defaultValue={new Date()}
      />
    </Paper>
  );
};

export default Calendar;
