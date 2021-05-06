import { any, objectOf } from "prop-types";

export const classes = {
  classes: objectOf(any).isRequired,
};

export type Styles = {
  [key: string]: {
    [key: string]: string;
  };
};
