import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  paper: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    "& .MuiPaper-elevation16": {
      margin: "auto",
      backgroundColor: palette.secondary.light,
      borderRadius: "0.3rem 0.3rem 0 0",
      bottom: "3.5rem",
      [breakpoints.down("xs")]: {
        width: "100%",
      },
      [breakpoints.up("sm")]: {
        width: "70%",
      },
      [breakpoints.up("md")]: {
        width: "45%",
        bottom: "0",
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
});
