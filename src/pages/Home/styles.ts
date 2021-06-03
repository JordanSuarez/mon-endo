import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  container: string;
  appBar: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    color: palette.primary.main,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "-1rem",
    },
  },
  container: {
    width: "35%",
    [breakpoints.down("lg")]: {
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
    minHeight: "80vh",
    marginTop: "2.5rem",
    marginBottom: "-0.6rem",
  },
});
