import { AnyAction } from "redux";

import { MealState } from "common/redux/reducers/meal/types";

export type MealAction = MealState & AnyAction;
