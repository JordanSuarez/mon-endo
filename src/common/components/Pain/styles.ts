import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  addIcon: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    marginTop: "1rem",
    width: "50%",
    height: "fit-content",
    minHeight: "14rem",
    textTransform: "initial",
    [breakpoints.up("md")]: {
      width: "40%",
      minWidth: "20rem",
    },
    [breakpoints.down("md")]: {
      width: "50%",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  addIcon: {
    margin: "1rem",
    color: palette.common.white,
    backgroundColor: palette.primary.light,
    "&:hover": {
      backgroundColor: palette.primary.dark,
    },
  },
});
