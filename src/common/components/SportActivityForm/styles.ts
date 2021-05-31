import { Styles } from "common/types/styles";

export type StylesInterface = {
  durationContainer: string;
  field: string;
};

export const styles = (): Styles => ({
  durationContainer: {
    display: "flex",
    flexDirection: "row",
  },
  field: {
    width: "62%",
    marginRight: "1rem",
    marginTop: "1rem",
  },
});
