import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/classes";

export type StylesInterface = {
  root: string;
  appBar: string;
  content: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    overflow: "auto",
  },
  appBar: {
    zIndex: "1",
  },
  content: {
    margin: "auto",
    color: palette.secondary.main,
  },
});
