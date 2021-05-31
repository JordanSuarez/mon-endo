import { PainType } from "common/types/pains";
import { PainsTypeAction } from "common/redux/actions/painsType/types";
import { SAVE_PAINS_TYPE } from "common/redux/actions/painsType";
import { PainsTypeState } from "./types";

const initialState = {
  painsType: [] as PainType[],
} as PainsTypeState;

const painsTypeReducer = (
  state = initialState,
  action: PainsTypeAction
): PainsTypeState => {
  switch (action.type) {
    case SAVE_PAINS_TYPE:
      return {
        ...state,
        painsType: action.painsType,
      };
    default:
      return { ...state };
  }
};

export default painsTypeReducer;
