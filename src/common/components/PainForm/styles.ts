import { Styles } from "common/types/styles";

export type StylesInterface = {
  field: string;
};

export const styles = (): Styles => ({
  field: {
    width: "100%",
    marginTop: "1rem",
    minHeight: "5rem",
  },
});
