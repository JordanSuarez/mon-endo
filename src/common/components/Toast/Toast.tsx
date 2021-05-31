import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

import { StylesInterface } from "./styles";
import { ToastState } from "./redux/reducers/types";

type Props = ToastState & {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  hideToast: () => void;
};

const Toast = ({
  classes,
  severity,
  title,
  content,
  isOpen,
  hideToast,
}: Props): JSX.Element => {
  const handleClose = () => hideToast();
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert severity={severity} className={classes.root} onClose={handleClose}>
        <AlertTitle>{title}</AlertTitle>
        {content}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
