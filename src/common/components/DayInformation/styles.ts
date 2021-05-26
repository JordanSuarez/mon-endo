import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  divider: string;
  list: string;
  listItem: string;
  listItemText: string;
  iconsContainer: string;
  text: string;
  textField: string;
  form: string;
  addIcon: string;
  editIcon: string;
  deleteIcon: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    marginTop: "1rem",
    minHeight: "15rem",
    width: "50%",
    textTransform: "initial",
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
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
  text: {
    paddingBottom: "3rem",
    marginTop: "3rem",
    textAlign: "center",
    fontStyle: "italic",
  },
  textField: {
    marginTop: "0.5rem",
  },
  form: {
    width: "100%",
    minHeight: "8rem",
    position: "relative",
  },
  addIcon: {
    margin: "1rem",
    color: palette.common.white,
    backgroundColor: palette.primary.light,
    "&:hover": {
      backgroundColor: palette.primary.dark,
    },
  },
  editIcon: {
    color: palette.primary.main,
    backgroundColor: palette.common.white,
  },
  deleteIcon: {
    color: palette.secondary.main,
    backgroundColor: palette.common.white,
  },
});
