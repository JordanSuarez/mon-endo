import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { addPain, getDailyPains } from "common/redux/actions/pains";
import { AppState } from "common/types/redux";
import { Pain } from "common/types/pains";
import { PainFormState } from "./redux/reducers/types";
import { hidePainForm } from "./redux/actions";
import { styles } from "./styles";
import PainForm from "./PainForm";

type State = {
  painForm: PainFormState;
};

const mapStateToProps = ({ painForm: painState }: State) => ({
  ...painState,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  getDailyPains: async () => {
    dispatch(await getDailyPains());
  },
  toggleDrawer: () => {
    dispatch(hidePainForm());
  },
  createPain: async (pain: Omit<Pain, "userId, id">) => {
    dispatch(await addPain(pain));
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(PainForm);
