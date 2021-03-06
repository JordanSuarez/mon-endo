import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  content: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    overflow: "auto",
  },
  content: {
    margin: "2rem 2rem 5rem",
    height: "fit-content",
    color: palette.primary.main,
    width: "100%",
    [breakpoints.down("md")]: {
      margin: "2rem 1rem 5rem",
    },
  },
});
