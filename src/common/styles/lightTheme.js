import { createMuiTheme } from "@material-ui/core";

const palette = {
  white: "#ffffff",
  second: "#011832",
  secondGrey: "#a7a2a2",
  secondBlue: "#f2f3f6",
  first: "#f6f5f5",
  secondDarkBlue: "#141C88",
  mediumBlue: "#1c2886",
  red: "#af2d2d",
  secondRed: "#ce6262",
  orange: "#ee6f57",
  menu: "rgb(216 216 216 / 90%)",
};

const font = {
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
