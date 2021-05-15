import { Styles } from "common/types/styles";

export type StylesInterface = {
  root: string;
};

export const styles = (): Styles => ({
  root: {
    width: "20rem",
  },
});
