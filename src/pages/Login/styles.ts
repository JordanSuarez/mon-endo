import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
  image: string;
  title: string;
  subtitle: string;
  form: string;
  box: string;
  textField: string;
  button: string;
  submitButton: string;
  icon: string;
  link: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100vh",
    overflow: "scroll",
    backgroundColor: palette.common.white,
  },
  image: {
    marginTop: "2rem",
    width: "55%",
    height: "80%",
    alignSelf: "center",
    background: `url(${process.env.PUBLIC_URL}/login.png) no-repeat center`,
    backgroundSize: "contain",
    [breakpoints.down("sm")]: {
      height: "65%",
    },
    [breakpoints.down("xs")]: {
      height: "45%",
    },
  },
  title: {
    fontSize: "3rem",
    textAlign: "center",
    color: palette.primary.dark,
    marginBottom: "1rem",
  },
  subtitle: {
    color: palette.primary.light,
    marginBottom: "1rem",
  },
  form: {
    margin: "auto",
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "25rem",
    [breakpoints.down("sm")]: {
      width: "50%",
      height: "auto",
      marginBottom: "2rem",
    },
    [breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  box: {
    minHeight: "5rem",
    marginTop: "1rem",
  },
  textField: {
    "& input": {
      color: palette.primary.dark,
    },
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    textTransform: "none",
    width: "50%",
    fontSize: "1rem",
    color: palette.primary.dark,
    padding: "0",
    marginBottom: "1rem",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: palette.common.white,
    },
  },
  submitButton: {
    backgroundColor: palette.primary.light,
    textTransform: "none",
  },
  icon: {
    color: palette.primary.light,
  },
  link: {
    textAlign: "center",
    marginTop: "0.5rem",
    color: palette.primary.dark,
    fontSize: "1rem",
    textDecoration: "none",
    "& span": {
      textDecoration: "underline",
    },
    "&:active": {
      color: palette.secondary.dark,
    },
  },
});
