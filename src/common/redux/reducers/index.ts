import { combineReducers } from "redux";

import toastReducer from "common/components/Toast/redux/reducers";
import drawerReducer from "common/components/Drawer/redux/reducers";
import rootReducer from "common/redux/reducers/root";
import painsReducer from "common/redux/reducers/pains";
import painsTypeReducer from "common/redux/reducers/painsType";
import painsTypeIntensityReducer from "common/redux/reducers/painsTypeIntensity";
import mealReducer from "common/redux/reducers/meal";
import sportActivitiesReducer from "common/redux/reducers/sportActivities";

const reducer = combineReducers({
  root: rootReducer,
  toast: toastReducer,
  drawer: drawerReducer,
  meal: mealReducer,
  pains: painsReducer,
  painsType: painsTypeReducer,
  painsTypeIntensity: painsTypeIntensityReducer,
  sportActivities: sportActivitiesReducer,
});

export default reducer;
