import React from "react";

import { ClassNameMap } from "@material-ui/styles";

import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

const NotFound = ({ classes }: Props): JSX.Element => {
  return <div className={classes.root}>404</div>;
};

export default NotFound;
