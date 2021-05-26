import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppState } from "common/types/redux";
import { styles } from "./styles";
import SportActivityForm, { Props } from "./SportActivityForm";

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
) => ({});

export default compose<Props, Omit<Props, "classes">>(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(SportActivityForm);
