import { combineReducers } from "redux";

import toastReducer from "common/components/Toast/redux/reducers";
import addPainReducer from "common/components/AddPain/redux/reducers";
import rootReducer from "common/redux/reducers/root";
import painsReducer from "common/redux/reducers/pains";

const reducer = combineReducers({
  root: rootReducer,
  toast: toastReducer,
  addPain: addPainReducer,
  pains: painsReducer,
});

export default reducer;
