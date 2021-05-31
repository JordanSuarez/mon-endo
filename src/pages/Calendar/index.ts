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
import { SportActivity } from "common/types/sportActivity";
import { getSportActivities } from "common/redux/actions/sportActivities";
import { getMeal } from "common/redux/actions/meal";
import { Meal } from "common/types/meal";
import { styles } from "./styles";
import Calendar, { Props } from "./Calendar";

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
  getPains: async (date: string) => {
    dispatch(await getPains(date));
  },
  getSportActivities: async () => {
    dispatch(await getSportActivities());
  },
  saveDate: (state: RootState) => {
    dispatch(saveRoot(state));
  },
  getMeal: async (date: string) => {
    dispatch(await getMeal(date));
  },
});

export default compose<Props, Omit<Props, "classes">>(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Calendar);
