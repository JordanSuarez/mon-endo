import { connect } from "react-redux";

import { TypeAction } from "common/types/redux";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { showToast } from "common/components/Toast/redux/actions";
import { Dispatch, FunctionComponent } from "react";
import PasswordRecovery from "./PasswordRecovery";

const mapDispatchToProps = (dispatch: Dispatch<TypeAction>) => ({
  showToast: (toast: ToastState) => {
    dispatch(showToast(toast));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(PasswordRecovery as FunctionComponent);
