import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Box, MenuItem } from "@material-ui/core";
import { Select as SelectMUI } from "mui-rff";

import { SelectFieldsProps } from "common/types/fields";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  handleClick: (values: any, fieldName: string) => void;
  required: any;
  fieldProps: SelectFieldsProps;
  options: any[];
};

const Select = ({
  classes,
  handleClick,
  required,
  options,
  fieldProps,
}: Props): JSX.Element => {
  return (
    <Box className={classes.field} key={fieldProps.name}>
      <SelectMUI
        label={fieldProps.label}
        name={fieldProps.name}
        variant={fieldProps.variant}
        required={required[fieldProps.name]}
      >
        {fieldProps.callback(options).map(({ id, name }) => {
          return (
            <MenuItem
              key={id}
              value={id}
              onClick={() => handleClick({ id, name }, fieldProps.name)}
            >
              {name}
            </MenuItem>
          );
        })}
      </SelectMUI>
    </Box>
  );
};

export default Select;
