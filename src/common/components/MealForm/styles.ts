import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  form: string;
  field: string;
  button: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    padding: "1rem",
    marginTop: "1rem",
    height: "fit-content",
    width: "35%",
    [breakpoints.down("xs")]: {
      width: "100%",
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
