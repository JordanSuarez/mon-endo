import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { PainType, PainTypeIntensity } from "common/types/pains";
import { getPainsType } from "common/redux/actions/painsType";
import { getPainsTypeIntensity } from "common/redux/actions/painsTypeIntensity";
import { styles } from "./styles";
import PainForm from "./PainForm";

type State = {
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
};

const mapStateToProps = ({ painsType, painsTypeIntensity }: State) => ({
  ...painsType,
  ...painsTypeIntensity,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({
  getPainsType: async () => {
    dispatch(await getPainsType());
  },
  getPainsTypeIntensity: async () => {
    dispatch(await getPainsTypeIntensity());
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(PainForm);
