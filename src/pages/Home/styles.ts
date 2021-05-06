import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/classes";

export type StylesInterface = {
  home: string;
  test: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  home: {
    margin: "auto",
    color: palette.secondary.main,
  },
  test: {
    margin: "auto",
    color: palette.secondary.main,
  },
});
