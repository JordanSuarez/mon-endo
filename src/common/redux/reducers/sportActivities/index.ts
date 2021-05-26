import { SportActivity } from "common/types/sportActivity";
import { SportActivitiesAction } from "common/redux/actions/sportActivities/types";
import { SAVE_SPORT_ACTIVITIES } from "common/redux/actions/sportActivities";
import { SportActivitiesState } from "./types";

const initialState = {
  sportActivities: [] as SportActivity[],
} as SportActivitiesState;

const sportActivitiesReducer = (
  state = initialState,
  action: SportActivitiesAction
): SportActivitiesState => {
  switch (action.type) {
    case SAVE_SPORT_ACTIVITIES:
      return {
        ...state,
        sportActivities: action.sportActivities,
      };
    default:
      return { ...state };
  }
};

export default sportActivitiesReducer;
