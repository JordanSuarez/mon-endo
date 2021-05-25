import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
};

export const styles = ({ palette, breakpoints }: Theme): Styles => ({
  root: {},
});
