import { Dispatch } from "react";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { AnyAction } from "redux";

import { hideToast, showToast } from "common/components/Toast/redux/actions";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { styles } from "./styles";
import EmailVerification from "./EmailVerification";

const mapsDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  hideToast: () => {
    dispatch(hideToast());
  },
  showToast: (toast: ToastState) => {
    dispatch(showToast(toast));
  },
});

export default compose(
  withStyles(styles),
  connect(null, mapsDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(EmailVerification);
