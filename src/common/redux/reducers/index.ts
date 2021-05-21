import { combineReducers } from "redux";

import toastReducer from "common/components/Toast/redux/reducers";
import drawerReducer from "common/components/Drawer/redux/reducers";
import rootReducer from "common/redux/reducers/root";
import painsReducer from "common/redux/reducers/pains";
import mealReducer from "common/redux/reducers/meal";

const reducer = combineReducers({
  root: rootReducer,
  toast: toastReducer,
  drawer: drawerReducer,
  pains: painsReducer,
  meal: mealReducer,
});

export default reducer;
