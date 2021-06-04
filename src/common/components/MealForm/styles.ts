import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  divider: string;
  form: string;
  field: string;
  button: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    marginTop: "1rem",
    height: "fit-content",
    [breakpoints.up("md")]: {
      width: "40%",
      minWidth: "20rem",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  divider: {
    margin: "0 1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
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
