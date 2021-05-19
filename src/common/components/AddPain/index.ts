import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getDailyPains } from "common/redux/actions/pains";
import { RootState } from "common/redux/reducers/root/types";
import { AddPainState } from "./redux/reducers/types";
import { hideAddPain } from "./redux/actions";
import { styles } from "./styles";
import AddPain from "./AddPain";

type State = {
  addPain: AddPainState;
  root: RootState;
};

const mapStateToProps = ({ addPain, root }: State) => ({
  ...addPain,
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
  toggleDrawer: () => {
    dispatch(hideAddPain());
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(AddPain);
