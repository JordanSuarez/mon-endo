import React from "react";

import {
  ButtonBaseProps,
  IconButton as MuiIconButton,
  Tooltip,
} from "@material-ui/core";

export type Props = ButtonBaseProps & {
  title: string;
  children: JSX.Element;
  className: string | undefined;
};

const IconButton = ({
  title,
  children,
  onClick,
  className,
  type,
}: Props): JSX.Element => {
  return (
    <Tooltip title={title}>
      <MuiIconButton
        className={className}
        aria-label={title}
        color="primary"
        type={type}
        onClick={onClick}
      >
        {children}
      </MuiIconButton>
    </Tooltip>
  );
};

IconButton.defaultProps = {
  type: "submit",
};

export default IconButton;
