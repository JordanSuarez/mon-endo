import { TOAST_HIDE, TOAST_SHOW, ToastAction } from "../actions/types";
import { ToastState } from "./types";

const initialState = {
  isOpen: false,
  title: "",
  content: "",
  severity: "success",
} as ToastState;

const toastReducer = (
  state = initialState,
  action: ToastAction
): ToastState => {
  switch (action.type) {
    case TOAST_SHOW:
      return {
        ...state,
        isOpen: action.isOpen,
        content: action.content,
        title: action.title,
        severity: action.severity,
      };
    case TOAST_HIDE:
      return {
        ...state,
        ...initialState,
      };

    default:
      return { ...state };
  }
};

export default toastReducer;
