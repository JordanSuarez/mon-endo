import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { showPainForm } from "common/components/PainForm/redux/actions";
import { deletePain, updatePain } from "common/redux/actions/pains";
import { AppState } from "common/types/redux";
import { Pain } from "common/types/pains";
import DayInformation from "./DayInformation";
import { styles } from "./styles";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  toggleDrawer: () => {
    dispatch(showPainForm());
  },
  deletePain: (painId: string) => {
    dispatch(deletePain(painId));
  },
  updatePain: (pain: Pain) => {
    dispatch(updatePain(pain));
  },
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(DayInformation);
