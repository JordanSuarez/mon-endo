import { ToastAction } from "../actions/types";
import { HIDE_TOAST, SHOW_TOAST } from "../actions";
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
    case SHOW_TOAST:
      return {
        ...state,
        isOpen: action.isOpen,
        content: action.content,
        title: action.title,
        severity: action.severity,
      };
    case HIDE_TOAST:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return { ...state };
  }
};

export default toastReducer;
