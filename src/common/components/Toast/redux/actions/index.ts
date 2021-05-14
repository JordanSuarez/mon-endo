import { TOAST_HIDE, TOAST_SHOW, ToastAction } from "./types";
import { ToastState } from "../reducers/types";

export const showToast = (toast: ToastState): ToastAction => ({
  type: TOAST_SHOW,
  ...toast,
});

export const hideToast = (): { type: string } => ({
  type: TOAST_HIDE,
});
