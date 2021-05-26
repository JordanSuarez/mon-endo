import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { showDrawer } from "common/components/Drawer/redux/actions";
import { deletePain, updatePain } from "common/redux/actions/pains";
import { AppState } from "common/types/redux";
import { Pain as IPain } from "common/types/pains";
import { getPainsType } from "common/redux/actions/painsType";
import { getPainsTypeIntensity } from "common/redux/actions/painsTypeIntensity";
import Pain, { Props } from "./Pain";
import { styles } from "./styles";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  toggleDrawer: (context: string) => {
    dispatch(showDrawer(context));
  },
  deletePain: async (painId: string) => {
    dispatch(await deletePain(painId));
  },
  updatePain: async (pain: IPain) => {
    dispatch(await updatePain(pain));
  },
  getPainsType: async () => {
    dispatch(await getPainsType());
  },
  getPainsTypeIntensity: async () => {
    dispatch(await getPainsTypeIntensity());
  },
});

export default compose<Props, Pick<Props, "pains" | "dateTime">>(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(Pain);
