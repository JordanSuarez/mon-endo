import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  content: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    overflow: "auto",
  },
  content: {
    margin: "2rem",
    color: palette.primary.main,
  },
});
