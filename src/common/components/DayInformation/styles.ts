import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  list: string;
  divider: string;
  listItem: string;
  listItemText: string;
  iconsContainer: string;
  editIcon: string;
  deleteIcon: string;
  form: string;
  text: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  divider: {
    margin: "0 1rem",
  },
  list: {
    paddingTop: "0",
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
    "& ul": {
      paddingLeft: "1rem",
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
      top: "1.8rem",
    },
    [breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  editIcon: {
    color: palette.primary.main,
    "&:hover": {
      backgroundColor: palette.secondary.light,
    },
  },
  deleteIcon: {
    color: palette.secondary.main,
    "&:hover": {
      backgroundColor: palette.secondary.light,
    },
  },
  form: {
    width: "100%",
    minHeight: "8rem",
    position: "relative",
  },
  text: {
    paddingBottom: "3rem",
    marginTop: "3rem",
    textAlign: "center",
    fontStyle: "italic",
  },
});
