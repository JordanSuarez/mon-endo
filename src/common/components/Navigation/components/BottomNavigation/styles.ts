import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  button: string;
  content: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  root: {
    backgroundColor: palette.primary.light,
    color: palette.primary.dark,
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
  button: {
    color: palette.secondary.light,
  },
});
