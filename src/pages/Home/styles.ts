import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  root: {
    color: palette.primary.main,
    maxWidth: "70rem",
  },
});
