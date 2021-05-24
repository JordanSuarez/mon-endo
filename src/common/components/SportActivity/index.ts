import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { Meal } from "common/types/meal";
import { showDrawer } from "common/components/Drawer/redux/actions";
import { styles } from "./styles";
import SportActivityForm from "./SportActivityForm";

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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(SportActivityForm);
