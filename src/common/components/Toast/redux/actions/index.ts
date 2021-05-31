import { AnyAction } from "redux";

import { ToastAction } from "./types";
import { ToastState } from "../reducers/types";

export const SHOW_TOAST = "SHOW_TOAST";
export const HIDE_TOAST = "HIDE_TOAST";

export const showToast = (toast: ToastState): ToastAction => ({
  type: SHOW_TOAST,
  ...toast,
});

export const hideToast = (): AnyAction => ({
  type: HIDE_TOAST,
});
