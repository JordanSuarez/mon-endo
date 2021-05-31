import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
};

export const styles = (): Styles => ({
  root: {
    minWidth: "15rem",
  },
});
