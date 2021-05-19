import { withStyles } from "@material-ui/core";
import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";

import { showPainForm } from "common/components/PainForm/redux/actions";
import { compose } from "recompose";
import SideNavigation from "./SideNavigation";
import { styles } from "./styles";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  toggleDrawer: () => {
    dispatch(showPainForm());
  },
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(SideNavigation);
