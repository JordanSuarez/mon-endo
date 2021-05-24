import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  title: string;
  form: string;
  field: string;
  button: string;
  icon: string;
  updateFieldsContainer: string;
  createFieldsContainer: string;
  iconsContainer: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  title: {
    marginBottom: "1rem",
    marginTop: "0.6rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  updateFieldsContainer: {
    width: "74%",
    [breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  createFieldsContainer: {
    width: "1OO%",
  },
  field: {
    width: "100%",
    marginTop: "1rem",
    minHeight: "5rem",
  },
  button: {
    textTransform: "none",
    width: "100%",
    margin: "1rem 0 0",
    padding: "0.5rem",
    backgroundColor: palette.primary.light,
  },
  iconsContainer: {
    position: "absolute",
    right: "0",
    top: "0.4rem",
    display: "flex",
    flexDirection: "column",
    [breakpoints.down("xs")]: {
      top: "0",
      flexDirection: "row",
    },
    "& button": {
      margin: "0.2rem",
    },
  },
});
