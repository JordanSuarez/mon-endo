import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  addIcon: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    marginTop: "1rem",
    minHeight: "13.5rem",
    minWidth: "20rem",
    textTransform: "initial",
    height: "fit-content",
    [breakpoints.up("md")]: {
      width: "40%",
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
