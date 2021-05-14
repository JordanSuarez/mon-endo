import { Color } from "@material-ui/lab";

export type ToastState = {
  isOpen: boolean;
  title: string;
  content: string;
  severity: Color;
};
