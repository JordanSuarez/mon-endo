import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { PainType, PainTypeIntensity } from "common/types/pains";
import { getPainsType } from "common/redux/actions/painsType";
import { getPainsTypeIntensity } from "common/redux/actions/painsTypeIntensity";
import { RootState } from "common/redux/reducers/root/types";
import { styles } from "./styles";
import PainForm, { Props } from "./PainForm";

type State = {
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
  root: RootState;
};

const mapStateToProps = ({ painsType, painsTypeIntensity, root }: State) => ({
  ...painsType,
  ...painsTypeIntensity,
  date: root.date,
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

export default compose<
  Props,
  Pick<
    Props,
    | "initialValues"
    | "descriptionFieldIsActive"
    | "handleSubmit"
    | "handleClose"
  >
>(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(PainForm);
