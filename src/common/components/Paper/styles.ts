import { Styles } from "common/types/styles";

export type StylesInterface = {
  header: string;
  title: string;
  divider: string;
};

export const styles = (): Styles => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    minHeight: "5rem",
  },
  title: {
    padding: "1rem",
    fontSize: "1rem",
    textTransform: "capitalize",
  },
  divider: {
    margin: "0 1rem",
  },
});
