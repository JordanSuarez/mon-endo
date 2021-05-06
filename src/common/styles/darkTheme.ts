import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { BreakpointsOptions } from "@material-ui/core/styles/createBreakpoints";

const palette = {
  secondary: {
    dark: "#1f2658",
    main: "#c2c2d2",
    light: "#a29395",
  },
  primary: {
    dark: "#141C88",
    main: "#141C88",
    light: "#141C88",
  },
  main: {
    dark: "#141C88",
    main: "#141C88",
    light: "#141C88",
  },
  error: {
    dark: "#f50202",
    main: "#d70202",
    light: "#e06262",
  },
} as PaletteOptions;

const typography = {
  main: "Open Sans, sans-serif",
  title: "Oswald",
} as TypographyOptions;

const breakpoints = {
  values: {
    xs: 335,
    sm: 535,
    md: 960,
    lg: 1100,
    xl: 1920,
  },
} as BreakpointsOptions;

export default createMuiTheme({
  breakpoints,
  palette,
  typography,
});
