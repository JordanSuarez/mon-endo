import { SelectProps, TextFieldProps } from "mui-rff";
import { PainTypes } from "./painTypes";

export type TextFieldsProps = TextFieldProps & {
  icon: JSX.Element;
};

export type SelectFieldsProps = SelectProps & {
  painTypes: (array: Array<PainTypes>) => Array<PainTypes>;
};
