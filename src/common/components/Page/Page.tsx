import React from "react";

import { ClassNameMap } from "@material-ui/styles";

import { classes as classesProps } from "common/classes";
import { StylesInterface } from "./styles";
import Navigation from "../Navigation";

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
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

Page.propTypes = {
  ...classesProps,
};

export default Page;
