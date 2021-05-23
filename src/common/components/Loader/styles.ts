import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  loader: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  loader: {
    margin: "auto",
    display: "block",
    flexDirection: "column",
    marginTop: "2rem",
    color: palette.primary.dark,
    position: "relative",
    top: "20vh",
  },
});
