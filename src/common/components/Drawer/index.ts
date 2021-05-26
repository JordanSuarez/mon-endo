import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { Pain } from "common/types/pains";
import { SportActivity } from "common/types/sportActivity";
import { createPain } from "common/redux/actions/pains";
import { createSportActivity } from "common/redux/actions/sportActivities";
import { DrawerState } from "./redux/reducers/types";
import { hideDrawer } from "./redux/actions";
import { styles } from "./styles";
import Drawer from "./Drawer";

type State = {
  drawer: DrawerState;
};
const mapStateToProps = ({ drawer }: State) => ({
  ...drawer,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  closeDrawer: () => {
    dispatch(hideDrawer());
  },
  createPain: async (pain: Omit<Pain, "userId" | "id">) => {
    dispatch(await createPain(pain));
  },
  createSportActivity: async (
    sportActivity: Omit<SportActivity, "userId" | "id">
  ) => {
    dispatch(await createSportActivity(sportActivity));
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(Drawer);
