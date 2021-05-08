import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Paper } from "@material-ui/core";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

const Calendar = ({ classes }: Props): JSX.Element => {
  return (
    <Paper elevation={3} className={classes.root}>
      <ReactCalendar className={classes.calendar} />
    </Paper>
  );
};

export default Calendar;
