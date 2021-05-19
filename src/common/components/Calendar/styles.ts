import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  calendar: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    margin: "2rem auto",
    [breakpoints.down("md")]: {
      width: "100%",
    },
    [breakpoints.up("md")]: {
      maxWidth: "45rem",
    },
  },
  calendar: {
    width: "100%",
    margin: "0.1rem",
    border: "none",
    color: palette.primary.light,
    backgroundColor: palette.common.white,
    "& .react-calendar__month-view__days__day--weekend": {
      color: palette.primary.light,
    },
    "& .react-calendar__month-view__days__day--neighboringMonth": {
      color: palette.primary.light,
    },
    "& .react-calendar__tile--now": {
      background: palette.secondary.dark,
    },
    "& .react-calendar__tile": {
      borderRadius: "15px",
      margin: "0.5rem",
    },
  },
});
