import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { ClassNameMap } from "@material-ui/styles";

import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

const Loader = ({ classes }: Props): JSX.Element => {
  return <CircularProgress className={classes.loader} />;
};

export default Loader;
