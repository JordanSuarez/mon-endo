import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { Meal } from "common/types/meal";
import {
  createMeal,
  getDailyMeal,
  updateMeal,
} from "common/redux/actions/meal";
import { styles } from "./styles";
import MealForm from "./MealForm";

type State = {
  meal: Meal;
};

const mapStateToProps = ({ meal }: State) => ({
  meal,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  getDailyMeal: async () => {
    dispatch(await getDailyMeal());
  },
  createMeal: async (meal: Omit<Meal, "userId" | "id">) => {
    dispatch(await createMeal(meal));
  },
  updateMeal: async (meal: Meal) => {
    dispatch(await updateMeal(meal));
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(MealForm);
