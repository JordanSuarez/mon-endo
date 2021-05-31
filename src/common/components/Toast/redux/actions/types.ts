import { AnyAction } from "redux";

import { ToastState } from "../reducers/types";

export type ToastAction = ToastState & AnyAction;

export type DispatchType = (arg: ToastState) => ToastAction;
