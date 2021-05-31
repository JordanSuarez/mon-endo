import React from "react";

import {
  ButtonBaseProps,
  IconButton as MuiIconButton,
  PropTypes,
  Tooltip,
} from "@material-ui/core";

export type Props = ButtonBaseProps & {
  title: string;
  children: JSX.Element;
  className: string | undefined;
  color: PropTypes.Color;
};

const IconButton = ({
  title,
  children,
  onClick,
  className,
  type,
  disabled,
  color,
}: Props): JSX.Element => {
  return (
    <Tooltip title={!disabled ? title : ""}>
      <MuiIconButton
        className={className}
        aria-label={title}
        color={color}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </MuiIconButton>
    </Tooltip>
  );
};

IconButton.defaultProps = {
  type: "submit",
  className: "",
  disabled: false,
  color: "primary",
};

export default IconButton;
