import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "common/redux/reducers/root/types";
import { saveRoot } from "common/redux/actions/root";
import App from "./App";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    Record<string, unknown>,
    Record<string, unknown>,
    AnyAction
  >
) => ({
  saveRoot: (state: RootState) => {
    dispatch(saveRoot(state));
  },
});

export default connect(null, mapDispatchToProps)(App);
