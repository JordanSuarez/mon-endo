import { Pain } from "common/types/pains";
import { PainsAction } from "common/redux/actions/pains/types";
import { SAVE_PAINS } from "common/redux/actions/pains";
import { PainsState } from "./types";

const initialState = ([] as Pain[]) as PainsState;

const painsReducer = (
  state = initialState,
  action: PainsAction
): PainsState => {
  switch (action.type) {
    case SAVE_PAINS:
      return action.pains;
    default:
      return { ...state };
  }
};

export default painsReducer;
