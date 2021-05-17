import React from "react";

import PersonIcon from "@material-ui/icons/Person";

import { TextFieldsProps } from "common/types/textField";
import locale from "./locale";

export default [
  {
    name: locale.form.field.email.name,
    label: locale.form.field.email.label,
    variant: "outlined",
    type: "text",
    icon: <PersonIcon />,
  },
] as Array<TextFieldsProps>;
