import { LoaderAction } from "../actions/types";
import { HIDE_LOADER, SHOW_LOADER } from "../actions";
import { LoaderState } from "./types";

const initialState = {
  isLoading: false,
} as LoaderState;

const LoaderReducer = (
  state = initialState,
  action: LoaderAction
): LoaderState => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

export default LoaderReducer;
