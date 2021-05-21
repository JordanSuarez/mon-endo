import { MealAction } from "common/redux/actions/meal/types";
import { SAVE_MEAL } from "common/redux/actions/meal";
import { MealFormInitialValues } from "common/types/meal";
import { MealState } from "./types";

const initialState = {
  id: "",
  date: "",
  content: {} as MealFormInitialValues,
  userId: "",
} as MealState;

const mealReducer = (state = initialState, action: MealAction): MealState => {
  switch (action.type) {
    case SAVE_MEAL:
      return {
        ...state,
        id: action.id,
        date: action.date,
        content: action.content,
        userId: action.userId,
      };
    default:
      return { ...state };
  }
};

export default mealReducer;
