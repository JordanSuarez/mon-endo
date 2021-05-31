import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Box, MenuItem } from "@material-ui/core";
import { Select as SelectMUI } from "mui-rff";
import { get } from "lodash";

import { SelectFieldsProps } from "common/types/fields";
import { StylesInterface } from "./styles";

type Props<T> = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  handleClick: (values: T, fieldName: string) => void;
  required: any;
  fieldProps: SelectFieldsProps;
  options: T[];
};

const Select = <T,>({
  classes,
  handleClick,
  required,
  options,
  fieldProps,
}: Props<T>): JSX.Element => {
  return (
    <Box className={classes.field} key={fieldProps.name}>
      <SelectMUI
        label={fieldProps.label}
        name={fieldProps.name}
        variant={fieldProps.variant}
        required={required[fieldProps.name]}
      >
        {fieldProps.callback(options).map((props) => {
          return (
            <MenuItem
              key={get(props, "id", "")}
              value={get(props, "id", "")}
              onClick={() => handleClick(props, fieldProps.name)}
            >
              {get(props, "name", "")}
            </MenuItem>
          );
        })}
      </SelectMUI>
    </Box>
  );
};

export default Select;
