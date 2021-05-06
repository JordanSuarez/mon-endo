import React from "react";

import { classes as classesProps } from "common/classes";
import { ClassNameMap } from "@material-ui/styles";
import { StylesInterface } from "./styles";

interface Props {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
}

const Home = ({ classes }: Props): JSX.Element => {
  return <div className={classes.home}>Home</div>;
};

Home.propTypes = {
  ...classesProps,
};

export default Home;
