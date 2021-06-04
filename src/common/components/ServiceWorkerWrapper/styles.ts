import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  button: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  button: {
    margin: "1rem",
    display: "flex",
    width: "13rem",
    backgroundColor: palette.primary.light,
    textTransform: "none",
    [breakpoints.down("xs")]: {
      width: "100%",
    },
  },
});
