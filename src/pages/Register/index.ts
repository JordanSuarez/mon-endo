import { compose } from "recompose";
import { connect } from "react-redux";

import { AnyAction } from "redux";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { showToast } from "common/components/Toast/redux/actions";
import { Dispatch, FunctionComponent } from "react";
import Register from "./Register";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  showToast: (toast: ToastState) => {
    dispatch(showToast(toast));
  },
});

export default compose(connect(null, mapDispatchToProps))(
  Register as FunctionComponent
);
