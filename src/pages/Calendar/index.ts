import { withStyles } from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getDailyPains, getPains } from "common/redux/actions/pains";
import { Pain } from "common/types/pains";
import { AppState } from "common/types/redux";
import { styles } from "./styles";
import Calendar from "./Calendar";

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
  getDailyPains: async () => {
    dispatch(await getDailyPains());
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(Calendar);
