import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  button: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  button: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    textTransform: "none",
    fontSize: "1rem",
    color: palette.primary.dark,
    padding: "0",
    marginBottom: "1rem",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: palette.common.white,
    },
  },
});
