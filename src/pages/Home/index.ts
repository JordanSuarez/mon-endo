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
import { Meal } from "common/types/meal";
import { getDailyMeal } from "common/redux/actions/meal";
import { styles } from "./styles";
import Home, { Props } from "./Home";

type State = {
  pains: Pain[];
  meal: Meal;
  sportActivities: SportActivity[];
};

const mapStateToProps = ({ pains, sportActivities, meal }: State) => ({
  ...pains,
  meal,
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
  getDailyMeal: async () => {
    dispatch(await getDailyMeal());
  },
});

export default compose<Props, Omit<Props, "classes">>(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
