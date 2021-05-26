import { withStyles } from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getPains } from "common/redux/actions/pains";
import { Pain } from "common/types/pains";
import { AppState } from "common/types/redux";
import { RootState } from "common/redux/reducers/root/types";
import { saveRoot } from "common/redux/actions/root";
import { styles } from "./styles";
import Calendar, { Props } from "./Calendar";

type State = {
  pains: Array<Pain>;
};

const mapStateToProps = ({ pains }: State) => ({
  ...pains,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  getPains: async (date: string) => {
    dispatch(await getPains(date));
  },
  saveDate: (state: RootState) => {
    dispatch(saveRoot(state));
  },
});

export default compose<Props, Omit<Props, "classes">>(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Calendar);
