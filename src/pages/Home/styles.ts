import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  container: string;
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
    },
  },
  container: {
    width: "35%",
    [breakpoints.down("md")]: {
      width: "48%",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
});
