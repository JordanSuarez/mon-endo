import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "common/redux/reducers";

const enhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, enhancers);

export default store;
