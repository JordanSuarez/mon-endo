import { Styles } from "common/types/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export type StylesInterface = {
  header: string;
  title: string;
  divider: string;
};

export const styles = ({ breakpoints }: Theme): Styles => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    minHeight: "5rem",
  },
  title: {
    padding: "1rem",
    fontSize: "1rem",
    textTransform: "initial",
    mawWidth: "70%",
    [breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  divider: {
    margin: "0 1rem",
  },
});
