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
import { getSportActivities } from "common/redux/actions/sportActivities";
import { SportActivity } from "common/types/sportActivity";
import { styles } from "./styles";
import Home from "./Home";

type State = {
  pains: Pain[];
  sportActivities: SportActivity[];
};

const mapStateToProps = ({ pains, sportActivities }: State) => ({
  ...pains,
  ...sportActivities,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  getDailyPains: async () => {
    dispatch(await getDailyPains());
  },
  getSportActivities: async () => {
    dispatch(await getSportActivities());
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
