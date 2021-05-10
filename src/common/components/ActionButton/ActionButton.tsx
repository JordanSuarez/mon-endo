import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  onClick: (value?: any) => void;
  endIcon: JSX.Element;
  label: string;
};

const ActionButton = ({
  classes,
  onClick,
  endIcon,
  label,
}: Props): JSX.Element => {
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={endIcon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
