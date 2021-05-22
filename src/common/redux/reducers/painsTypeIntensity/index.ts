import { PainTypeIntensity } from "common/types/pains";
import { PainsTypeIntensityAction } from "common/redux/actions/painsTypeIntensity/types";
import { SAVE_PAINS_TYPE_INTENSITY } from "common/redux/actions/painsTypeIntensity";
import { PainsTypeIntensityState } from "./types";

const initialState = ([] as PainTypeIntensity[]) as PainsTypeIntensityState;

const painsTypeIntensityReducer = (
  state = initialState,
  action: PainsTypeIntensityAction
): PainsTypeIntensityState => {
  switch (action.type) {
    case SAVE_PAINS_TYPE_INTENSITY:
      return {
        ...state,
        ...action.painsTypeIntensity,
      };
    default:
      return { ...state };
  }
};

export default painsTypeIntensityReducer;
