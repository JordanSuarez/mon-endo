import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  calendar: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    margin: "2.5rem auto",
    [breakpoints.down("md")]: {
      width: "100%",
    },
    [breakpoints.up("md")]: {
      maxWidth: "45rem",
      margin: "2.5rem 0",
    },
    [breakpoints.down("sm")]: {
      marginBottom: "3rem",
    },
  },
  calendar: {
    width: "100%",
    border: "none",
    color: palette.primary.light,
    backgroundColor: palette.common.white,
    "& *": {
      fontFamily: "Poppins, sans-serif",
      textTransform: "capitalize",
    },
    "& .react-calendar__month-view__days__day--weekend": {
      color: palette.common.black,
    },
    "& .react-calendar__month-view__days__day--neighboringMonth": {
      color: palette.primary.light,
    },
    "& .react-calendar__tile--now": {
      background: palette.common.white,
    },
    "& .react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus, .react-calendar__navigation button:enabled:hover": {
      backgroundColor: palette.secondary.light,
    },
    "& .react-calendar__tile--active": {
      backgroundColor: palette.primary.light,
    },
    "& .react-calendar__tile--active:enabled:focus, .react-calendar__navigation button:enabled:focus, .react-calendar__tile--hasActive:enabled:focus, .react-calendar__tile--hasActive": {
      color: palette.secondary.light,
      backgroundColor: palette.primary.light,
    },
    "& .react-calendar__tile--active:enabled:hover, .react-calendar__tile--hasActive:enabled:hover": {
      backgroundColor: palette.primary.dark,
    },
    "& .react-calendar__tile:disabled": {
      backgroundColor: palette.secondary.light,
      color: palette.secondary.dark,
    },
  },
});
