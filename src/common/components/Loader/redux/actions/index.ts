import { AnyAction } from "redux";

import { LoaderAction } from "./types";
import { LoaderState } from "../reducers/types";

export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const showLoader = (toast: LoaderState): LoaderAction => ({
  type: SHOW_LOADER,
  ...toast,
});

export const hideLoader = (): AnyAction => ({
  type: HIDE_LOADER,
});
