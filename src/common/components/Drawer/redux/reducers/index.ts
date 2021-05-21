import { DrawerAction } from "../actions/types";
import { SHOW_DRAWER, HIDE_DRAWER } from "../actions";
import { DrawerState } from "./types";

const initialState = {
  isOpen: false,
  context: "",
} as DrawerState;

const DrawerReducer = (
  state = initialState,
  action: DrawerAction
): DrawerState => {
  switch (action.type) {
    case SHOW_DRAWER:
      return {
        ...state,
        isOpen: true,
        context: action.context,
      };
    case HIDE_DRAWER:
      return {
        ...state,
        ...initialState,
      };

    default:
      return { ...state };
  }
};

export default DrawerReducer;
