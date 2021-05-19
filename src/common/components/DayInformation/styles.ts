import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  header: string;
  title: string;
  divider: string;
  list: string;
  listItem: string;
  listItemText: string;
  iconsContainer: string;
  icon: string;
  text: string;
  textField: string;
  form: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    marginTop: "1rem",
    width: "100%",
    minHeight: "15rem",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    padding: "1rem",
    textTransform: "capitalize",
  },
  divider: {
    margin: "0 1rem",
  },
  listItem: {
    minHeight: "8rem",
  },
  listItemText: {
    display: "flex",
    flexDirection: "column-reverse",
    overflowWrap: "break-word",
    "& span, p": {
      width: "70%",
    },
    "& span": {
      backgroundColor: palette.primary.dark,
      color: palette.secondary.light,
      borderRadius: "0 0.7rem 0.7rem 0",
      borderLeft: `0.3rem solid ${palette.secondary.dark}`,
      padding: "1rem",
      marginTop: "0.5rem",
      [breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    [breakpoints.down("xs")]: {
      marginTop: "1.4rem",
    },
  },
  iconsContainer: {
    marginLeft: "1rem",
    "& button": {
      margin: "0.2rem",
    },
    [breakpoints.down("xs")]: {
      top: "2rem",
    },
  },
  text: {
    padding: "4rem",
    textAlign: "center",
    fontStyle: "italic",
  },
  textField: {
    marginTop: "0.5rem",
  },
  form: {
    width: "76%",
    minHeight: "8rem",
    [breakpoints.down("xs")]: {
      width: "100%",
      //   flexWrap: "wrap",
      //   justifyContent: "flex-end",
    },
  },
});
