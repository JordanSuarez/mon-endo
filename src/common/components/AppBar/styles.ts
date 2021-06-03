import { Styles } from "common/types/styles";

export type StylesInterface = {
  appBar: string;
  tabPanel: string;
};

export const styles = (): Styles => ({
  tabPanel: {
    margin: "1rem",
  },
});
