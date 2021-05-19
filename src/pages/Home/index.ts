import { withStyles } from "@material-ui/core";

import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "common/redux/reducers/root/types";
import { getDailyPains } from "common/redux/actions/pains";
import { Pain } from "common/types/pains";
import { styles } from "./styles";
import Home from "./Home";

type State = {
  pains: Array<Pain>;
  root: RootState;
};

const mapStateToProps = ({ pains, root }: State) => ({
  ...pains,
  currentDate: root.date,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    Record<string, unknown>,
    Record<string, unknown>,
    AnyAction
  >
) => ({
  getDailyPains: async (date: string) => {
    dispatch(await getDailyPains(date));
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(Home);
