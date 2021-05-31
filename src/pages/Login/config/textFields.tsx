import React from "react";

import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

import { TextFieldsProps } from "common/types/fields";
import locale from "./locale";

export default [
  {
    name: locale.form.field.email.name,
    label: locale.form.field.email.label,
    variant: "outlined",
    type: "text",
    icon: <PersonIcon />,
  },
  {
    name: locale.form.field.password.name,
    label: locale.form.field.password.label,
    type: "password",
    variant: "outlined",
    icon: <LockIcon />,
  },
] as Array<TextFieldsProps>;
