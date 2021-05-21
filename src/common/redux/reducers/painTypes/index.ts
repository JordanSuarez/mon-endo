import { PainTypes } from "common/types/painTypes";
import { PainTypesAction } from "common/redux/actions/painTypes/types";
import { SAVE_PAIN_TYPES } from "common/redux/actions/painTypes";
import { PainTypesState } from "./types";

const initialState = {
  painTypes: [] as Array<PainTypes>,
} as PainTypesState;

const painTypesReducer = (
  state = initialState,
  action: PainTypesAction
): PainTypesState => {
  switch (action.type) {
    case SAVE_PAIN_TYPES:
      return {
        ...state,
        painTypes: action.painTypes,
      };
    default:
      return { ...state };
  }
};

export default painTypesReducer;
