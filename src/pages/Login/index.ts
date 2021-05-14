import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";

import { TypeAction } from "common/types/redux";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { showToast } from "common/components/Toast/redux/actions";
import { Dispatch } from "react";
import Login from "./Login";
import { styles } from "./styles";

const mapDispatchToProps = (dispatch: Dispatch<TypeAction>) => ({
  showToast: (toast: ToastState) => {
    dispatch(showToast(toast));
  },
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(Login);
