import { combineReducers } from "redux";

import toastReducer from "common/components/Toast/redux/reducers";
import painFormReducer from "common/components/PainForm/redux/reducers";
import rootReducer from "common/redux/reducers/root";
import painsReducer from "common/redux/reducers/pains";

const reducer = combineReducers({
  root: rootReducer,
  toast: toastReducer,
  painForm: painFormReducer,
  pains: painsReducer,
});

export default reducer;