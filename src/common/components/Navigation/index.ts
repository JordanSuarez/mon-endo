import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";

import { showDrawer } from "common/components/Drawer/redux/actions";
import Navigation from "./Navigation";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  toggleDrawer: (context: string) => {
    dispatch(showDrawer(context));
  },
});

export default connect(null, mapDispatchToProps)(Navigation);
