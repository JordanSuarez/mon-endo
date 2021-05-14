import { Dispatch } from "react";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";

import { TypeAction } from "common/types/redux";
import { hideToast } from "./redux/actions";
import { styles } from "./styles";
import Toast from "./Toast";
import { ToastState } from "./redux/reducers/types";

type State = {
  toast: ToastState;
};

const mapStateToProps = ({ toast }: State) => {
  return {
    ...toast,
  };
};

const mapsDispatchToProps = (dispatch: Dispatch<TypeAction>) => ({
  hideToast: () => {
    dispatch(hideToast());
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapsDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(Toast);
