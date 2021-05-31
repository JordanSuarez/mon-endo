import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
};

export const styles = (): Styles => ({
  root: {
    textTransform: "none",
    textAlign: "center",
    textDecoration: "underline",
  },
});
