import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  title: string;
  form: string;
  field: string;
  button: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  title: {
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    width: "100%",
    margin: "1rem 0",
    minHeight: "5rem",
  },
  button: {
    textTransform: "none",
    margin: "1rem 0 0",
    padding: "0.5rem",
    backgroundColor: palette.primary.light,
  },
});
