import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { Meal } from "common/types/meal";
import { showDrawer } from "common/components/Drawer/redux/actions";
import { styles } from "./styles";
import SportActivity, { Props } from "./SportActivity";

type State = {
  meal: Meal;
};

const mapStateToProps = ({ meal }: State) => ({
  meal,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  toggleDrawer: (context: string) => {
    dispatch(showDrawer(context));
  },
});

export default compose<Props, Pick<Props, "sportActivities">>(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(SportActivity);
