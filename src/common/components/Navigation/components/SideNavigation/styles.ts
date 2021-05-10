import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  profile: string;
  avatar: string;
  drawer: string;
  paper: string;
  title: string;
  link: string;
  content: string;
  listItem: string;
  logout: string;
  logoutButton: string;
};

export const styles = ({ palette }: Theme): Styles => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: "15rem",
    flexShrink: "0",
  },
  paper: {
    width: "15rem",
  },
  title: {
    fontSize: "2rem",
    margin: "1rem auto",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: palette.primary.dark,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  listItem: {
    marginLeft: "1rem",
  },
  logout: {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  logoutButton: {
    backgroundColor: palette.primary.light,
    textTransform: "none",
  },
});
