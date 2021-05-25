import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  title: string;
  addIcon: string;
  divider: string;
  text: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    marginTop: "1rem",
    height: "fit-content",
    [breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  title: {
    fontSize: "1rem",
    marginBottom: "1rem",
    marginTop: "0.6rem",
  },
  divider: {
    margin: "0 1rem",
  },
  addIcon: {
    margin: "1rem",
    color: palette.common.white,
    backgroundColor: palette.primary.light,
    "&:hover": {
      backgroundColor: palette.primary.dark,
    },
  },
  text: {
    paddingBottom: "3rem",
    marginTop: "3rem",
    textAlign: "center",
    fontStyle: "italic",
  },
});
