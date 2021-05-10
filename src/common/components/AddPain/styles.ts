import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  paper: string;
  form: string;
  field: string;
  button: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    "& .MuiPaper-elevation16": {
      margin: "auto",
      backgroundColor: palette.secondary.light,
      borderRadius: "0.3rem 0.3rem 0 0",
      [breakpoints.down("xs")]: {
        width: "100%",
      },
      [breakpoints.up("sm")]: {
        width: "70%",
      },
      [breakpoints.up("md")]: {
        width: "45%",
      },
      [breakpoints.up("lg")]: {
        width: "35%",
      },
    },
  },
  paper: {
    margin: "1rem",
    padding: "1rem",
    [breakpoints.up("sm")]: {
      margin: "3rem auto 1rem",
      width: "70%",
    },
    [breakpoints.up("lg")]: {
      margin: "4rem auto 1rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    width: "100%",
    margin: "1rem 0",
  },
  button: {
    textTransform: "none",
    backgroundColor: palette.primary.light,
  },
});
