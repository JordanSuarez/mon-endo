import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  paper: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  root: {
    color: palette.primary.main,
  },
  paper: {
    margin: "1rem",
    width: "10rem",
    height: "20rem",
  },
});
