import { AddPainAction } from "../actions/types";
import { SHOW_ADD_PAIN, HIDE_ADD_PAIN } from "../actions";
import { AddPainState } from "./types";

const initialState = {
  isOpen: false,
} as AddPainState;

const AddPainReducer = (
  state = initialState,
  action: AddPainAction
): AddPainState => {
  switch (action.type) {
    case SHOW_ADD_PAIN:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_ADD_PAIN:
      return {
        ...state,
        ...initialState,
      };

    default:
      return { ...state };
  }
};

export default AddPainReducer;
