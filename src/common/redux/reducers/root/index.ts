import { RootAction } from "common/redux/actions/root/types";
import { SAVE_ROOT } from "common/redux/actions/root";
import { RootState } from "./types";

const initialState = {
  date: "",
} as RootState;

const rootReducer = (state = initialState, action: RootAction): RootState => {
  switch (action.type) {
    case SAVE_ROOT:
      return {
        ...state,
        date: action.date,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
