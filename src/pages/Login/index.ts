import { connect } from "react-redux";

import { TypeAction } from "common/types/redux";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { showToast } from "common/components/Toast/redux/actions";
import { Dispatch, FunctionComponent } from "react";
import Login from "./Login";

const mapDispatchToProps = (dispatch: Dispatch<TypeAction>) => ({
  showToast: (toast: ToastState) => {
    dispatch(showToast(toast));
  },
});

export default connect(null, mapDispatchToProps)(Login as FunctionComponent);
