import { createMuiTheme } from "@material-ui/core";

const palette = {
  white: "#ffffff",
  second: "#f6f5f5",
  secondGrey: "#f6f5f5",
  secondBlue: "#e8f0fe",
  first: "#011832",
  secondDarkBlue: "#141C88",
  mediumBlue: "#1c2886",
  red: "#af2d2d",
  secondRed: "#ce6262",
  orange: "#ee6f57",
  menu: "rgb(11 45 86 / 90%)",
};

const font = {
  // main: 'Yanone Kaffeesatz',
  main: "Open Sans, sans-serif",
  title: "Oswald",
};

const breakpoints = {
  values: {
    xs: 335,
    sm: 535,
    md: 960,
    lg: 1100,
    xl: 1920,
  },
};

const cursor = {
  innerSize: 10,
  outerSize: 15,
};

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  breakpoints,
  palette,
  font,
  cursor,
});
