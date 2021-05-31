import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Paper as PaperMUI, Typography } from "@material-ui/core";

import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  className: string | undefined;
  title: string;
  button?: JSX.Element | null;
  children: JSX.Element;
};

const Paper = ({
  classes,
  title,
  button,
  children,
  className,
}: Props): JSX.Element => {
  return (
    <PaperMUI elevation={3} className={className}>
      <div className={classes.header}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        {button}
      </div>
      <div>{children}</div>
    </PaperMUI>
  );
};

Paper.defaultProps = {
  button: null,
};

export default Paper;
