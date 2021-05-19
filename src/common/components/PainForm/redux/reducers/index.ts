import { PainFormAction } from "../actions/types";
import { SHOW_PAIN_FORM, HIDE_PAIN_FORM } from "../actions";
import { PainFormState } from "./types";

const initialState = {
  isOpen: false,
} as PainFormState;

const PainFormReducer = (
  state = initialState,
  action: PainFormAction
): PainFormState => {
  switch (action.type) {
    case SHOW_PAIN_FORM:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_PAIN_FORM:
      return {
        ...state,
        ...initialState,
      };

    default:
      return { ...state };
  }
};

export default PainFormReducer;
