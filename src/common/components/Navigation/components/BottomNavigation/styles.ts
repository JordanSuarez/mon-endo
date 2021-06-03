import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  activeButton: string;
  button: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    backgroundColor: palette.primary.light,
    color: palette.primary.dark,
    position: "absolute",
    bottom: "0",
    width: "100%",
    zIndex: "2",
  },
  activeButton: {
    color: palette.secondary.light,
    backgroundColor: palette.primary.dark,
    "&.MuiBottomNavigationAction-root": {
      minWidth: "0",
      [breakpoints.up("xs")]: {
        minWidth: "80px",
      },
    },
  },
  button: {
    color: palette.secondary.light,
    "& .MuiBottomNavigationAction-root": {
      minWidth: "0",
      [breakpoints.up("xs")]: {
        minWidth: "80px",
      },
    },
    "& .MuiBottomNavigationAction-label": {
      [breakpoints.down("sm")]: {
        fontSize: "0.65rem",
      },
    },
  },
});
