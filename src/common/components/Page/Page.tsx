import React from "react";

import { ClassNameMap } from "@material-ui/styles";

import Navigation from "common/components/Navigation";
import { Typography } from "@material-ui/core";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  title: string;
  children: JSX.Element;
};

const Page = ({ classes, title, children }: Props): JSX.Element => {
  return (
    <div className={classes.root}>
      <Navigation />
      <div className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        {children}
      </div>
    </div>
  );
};

export default Page;
