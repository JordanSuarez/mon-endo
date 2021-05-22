import { SelectProps, TextFieldProps } from "mui-rff";

export type TextFieldsProps = TextFieldProps & {
  icon: JSX.Element;
};

export type SelectFieldsProps = SelectProps & {
  callback: <T>(arg: T[]) => T[];
};
