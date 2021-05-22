import { withStyles } from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getDailyPains } from "common/redux/actions/pains";
import { Pain } from "common/types/pains";
import { AppState } from "common/types/redux";
import { RootState } from "common/redux/reducers/root/types";
import { saveRoot } from "common/redux/actions/root";
import { styles } from "./styles";
import Home from "./Home";

type State = {
  pains: Pain[];
};

const mapStateToProps = ({ pains }: State) => ({
  ...pains,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  getDailyPains: async () => {
    dispatch(await getDailyPains());
  },
  saveDate: (state: RootState) => {
    dispatch(saveRoot(state));
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(Home);
