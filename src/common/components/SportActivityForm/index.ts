import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";

import { RootState } from "common/redux/reducers/root/types";
import { styles } from "./styles";
import SportActivityForm, { Props } from "./SportActivityForm";

type State = {
  root: RootState;
};

const mapStateToProps = ({ root }: State) => ({
  date: root.date,
});

export default compose<Props, Omit<Props, "classes" | "date">>(
  withStyles(styles),
  connect(mapStateToProps)
)(SportActivityForm);
