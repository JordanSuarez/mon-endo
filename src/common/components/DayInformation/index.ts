import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { showAddPain } from "common/components/AddPain/redux/actions";
import DayInformation from "./DayInformation";
import { styles } from "./styles";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    Record<string, unknown>,
    Record<string, unknown>,
    AnyAction
  >
) => ({
  toggleDrawer: () => {
    dispatch(showAddPain());
  },
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(DayInformation);
