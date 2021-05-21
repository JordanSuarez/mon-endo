import { TextFieldsProps } from "common/types/fields";
import locale from "./locale";

export default [
  {
    name: locale.field.breakfast.name,
    label: locale.field.breakfast.label,
    variant: "outlined",
    type: "text",
  },
  {
    name: locale.field.lunch.name,
    label: locale.field.lunch.label,
    type: "password",
    variant: "outlined",
  },
  {
    name: locale.field.dinner.name,
    label: locale.field.dinner.label,
    type: "password",
    variant: "outlined",
  },
] as Array<TextFieldsProps>;
