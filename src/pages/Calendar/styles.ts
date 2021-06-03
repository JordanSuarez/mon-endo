import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  content: string;
  container: string;
  appBar: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "-1rem",
    },
  },
  content: {
    color: palette.primary.main,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    width: "35%",
    flexWrap: "wrap",
    [breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
      display: "flex",
      width: "60%",
      justifyContent: "space-around",
    },
    [breakpoints.down("md")]: {
      width: "45%",
    },
    [breakpoints.down("md")]: {
      width: "48%",
    },
    [breakpoints.down("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",
    },
    [breakpoints.down(700)]: {
      flexDirection: "column",
    },
  },
  appBar: {
    zIndex: "0",
    marginTop: "-3rem",
    marginBottom: "-0.6rem",
    paddingBottom: "1rem",
  },
});
