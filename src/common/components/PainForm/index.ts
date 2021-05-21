import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { createPain } from "common/redux/actions/pains";
import { AppState } from "common/types/redux";
import { Pain } from "common/types/pains";
import { getPainTypes } from "common/redux/actions/painTypes";
import { styles } from "./styles";
import PainForm from "./PainForm";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  getPainTypes: async () => {
    dispatch(await getPainTypes());
  },
  createPain: async (pain: Omit<Pain, "userId" | "id">) => {
    dispatch(await createPain(pain));
  },
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(PainForm);
