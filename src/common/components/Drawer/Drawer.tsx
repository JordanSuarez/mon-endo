import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Drawer as MUIDrawer, Paper } from "@material-ui/core";

import { PAIN_FORM } from "common/constants/context";
import PainForm from "common/components/PainForm";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  isOpen: boolean;
  context: string;
  closeDrawer: (context: string) => void;
};

const Drawer = ({
  classes,
  isOpen,
  closeDrawer,
  context,
}: Props): JSX.Element => {
  return (
    <MUIDrawer
      anchor="bottom"
      open={isOpen}
      onClose={closeDrawer}
      className={classes.root}
    >
      <Paper className={classes.paper}>
        {context === PAIN_FORM && <PainForm />}
      </Paper>
    </MUIDrawer>
  );
};

export default Drawer;
