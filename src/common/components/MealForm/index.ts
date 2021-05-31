import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { Meal } from "common/types/meal";
import { createMeal, updateMeal } from "common/redux/actions/meal";
import { styles } from "./styles";
import MealForm, { Props } from "./MealForm";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  createMeal: async (meal: Omit<Meal, "userId" | "id">) => {
    dispatch(await createMeal(meal));
  },
  updateMeal: async (meal: Meal) => {
    dispatch(await updateMeal(meal));
  },
});

export default compose<Props, Pick<Props, "meal" | "date">>(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(MealForm);
