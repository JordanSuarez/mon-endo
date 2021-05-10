import React, { RefObject } from "react";

import { ClassNameMap } from "@material-ui/styles";

import Navigation from "common/components/Navigation";
import AddPain from "common/components/AddPain";
import { Typography } from "@material-ui/core";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  title: string;
  children: JSX.Element;
  toggleDrawer: () => void;
  drawerRef: RefObject<JSX.Element>;
  isOpen: boolean;
};

const Page = ({
  classes,
  title,
  children,
  toggleDrawer,
  drawerRef,
  isOpen,
}: Props): JSX.Element => {
  return (
    <div className={classes.root}>
      <Navigation toggleDrawer={toggleDrawer} />
      <div className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        {children}
        <AddPain ref={drawerRef} toggleDrawer={toggleDrawer} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Page;
