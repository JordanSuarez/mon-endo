import { TypeAction } from "common/types/redux";
import { ToastState } from "../reducers/types";

export const TOAST_SHOW = "TOAST/SHOW";
export const TOAST_HIDE = "TOAST/HIDE";

export type ToastAction = ToastState & TypeAction;

export type DispatchType = (arg: ToastState) => ToastAction;
