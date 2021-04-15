import React, { ReactElement } from "react";

import { classes as classesProps } from "common/classes";

const Home = ({ classe }: any): ReactElement => {
  console.log(classe, classes);
  return <div className={classe.title}>toto</div>;
};

Home.propTypes = {
  ...classesProps,
};

export default Home;
