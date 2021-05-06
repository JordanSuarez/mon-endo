import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { classes as classesProps } from "common/classes";
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

Calendar.propTypes = {
  ...classesProps,
};

export default Calendar;
