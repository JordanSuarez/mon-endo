import { combineReducers } from "redux";

import toastReducer from "common/components/Toast/redux/reducers";

const rootReducer = combineReducers({
  toast: toastReducer,
});

export default rootReducer;
