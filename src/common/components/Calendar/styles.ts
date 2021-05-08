import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  calendar: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  root: {
    maxWidth: "40rem",
  },
  calendar: {
    "&.react-calendar": {
      width: "99%",
      margin: "0.1rem",
      border: "none",
    },
  },
});
