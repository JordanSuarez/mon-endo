import { createStore } from "redux";

import reducer from "common/redux/reducers";

const store = createStore(reducer);

export default store;
