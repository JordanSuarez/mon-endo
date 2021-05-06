import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { BreakpointsOptions } from "@material-ui/core/styles/createBreakpoints";

const palette = {
  secondary: {
    dark: "#B8BAC7",
    main: "#D8AFB6",
    light: "#ECECF0",
  },
  primary: {
    dark: "#54507D",
    main: "#20278E",
    light: "#5D60A4",
  },
  error: {
    dark: "#DF302E",
    main: "#DF302E",
    light: "#DF302E",
  },
} as PaletteOptions;

const typography = {
  main: "Poppins, sans-serif",
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
